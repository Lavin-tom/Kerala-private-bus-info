async function search() {
    try {
        const dropdown1Value = document.getElementById("dropdown1").value;
        const dropdown2Value = document.getElementById("dropdown2").value;
        const dropdown3Value = document.getElementById("dropdown3").value;

        console.log("Searching with values:", dropdown1Value, dropdown2Value, dropdown3Value);

        const jsonFilePath = 'res/' + dropdown1Value.toLowerCase() + '.json';
        const response = await fetch(jsonFilePath);
        console.log('Response status:', response.status);

        const jsonData = await response.json();
        console.log('Fetched JSON data:', jsonData);

        const table = document.getElementById('resultTable');
        const tableBody = table.getElementsByTagName('tbody')[0];
        const tableHead = table.getElementsByTagName('thead')[0];

        tableHead.style.display = 'none';
        tableBody.innerHTML = '';

        if (jsonData && jsonData.busSchedules && jsonData.busSchedules.length > 0) {
            jsonData.busSchedules.forEach(schedule => {
                const routeIndex = schedule.route.indexOf(dropdown2Value);
                const destinationIndex = schedule.route.indexOf(dropdown3Value);

                if (routeIndex >= 0 && destinationIndex >= 0 && routeIndex < destinationIndex) {
                    const selectedTrip = schedule.schedule.find(trip => {
                        const startIndex = schedule.route.findIndex(station => station === dropdown2Value);
                        const endIndex = schedule.route.findIndex(station => station === dropdown3Value);
                        const stations = trip.stations;

                        return (
                            startIndex !== -1 &&
                            endIndex !== -1 &&
                            endIndex > startIndex &&
                            stations.length > endIndex &&
                            stations[startIndex].station === dropdown2Value &&
                            stations[endIndex].station === dropdown3Value
                        );
                    });

                    if (selectedTrip) {

                        tableHead.style.display = '';

                        const stations = selectedTrip.stations;
                        const row = tableBody.insertRow();
                        const cell1 = row.insertCell(0);
                        const cell2 = row.insertCell(1);
                        const cell3 = row.insertCell(2);
                        const cell4 = row.insertCell(3);

                        cell1.textContent = schedule["Vehicle Number"];
                        cell2.textContent = stations[0].station.trim();
                        cell3.textContent = stations[stations.length - 1].station.trim();
                        cell4.textContent = stations[0].departureTime;
                    }
                }
            });
        } else {
            console.error('Invalid data structure. Expected "busSchedules" property to exist.');
            document.getElementById('noRouteMessage').textContent = 'Invalid data structure. Please try again.';
        }
    } catch (error) {
        console.error('Error fetching or parsing JSON data:', error);
        document.getElementById('noRouteMessage').textContent = 'Error fetching or parsing data. Please try again.';
    }
}
