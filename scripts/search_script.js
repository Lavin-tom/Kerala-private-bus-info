function search() {
    var dropdown1Value = document.getElementById("dropdown1").value;
    var dropdown2Value = document.getElementById("dropdown2").value;
    var dropdown3Value = document.getElementById("dropdown3").value;

    console.log("Searching with values:", dropdown1Value, dropdown2Value, dropdown3Value);


    var jsonFilePath = 'res/' + dropdown1Value.toLowerCase() + '.json';


    fetchJsonData(jsonFilePath)
        .then(data => {
            const allTrips = [];


            if (data.schedule) {

                Object.keys(data.schedule).forEach(tripNumber => {
                    const tripSchedule = data.schedule[tripNumber];
                    const stations = tripSchedule.stations;

                    const routeIndex = stations.findIndex(station => station.station.trim() === dropdown2Value.trim());
                    const destinationIndex = stations.findIndex(station => station.station.trim() === dropdown3Value.trim());

                    if (routeIndex >= 0 && destinationIndex >= 0) {
                        const selectedStations = routeIndex < destinationIndex
                            ? stations.slice(routeIndex, destinationIndex + 1)
                            : stations.slice(destinationIndex, routeIndex + 1).reverse();

                        if (selectedStations.length === Math.abs(routeIndex - destinationIndex) + 1 &&
                            selectedStations[0].station.trim() === dropdown2Value.trim() &&
                            selectedStations[selectedStations.length - 1].station.trim() === dropdown3Value.trim()) {
                            allTrips.push({
                                vehicleNumber: data["Vehicle Number"],
                                tripNumber: tripNumber,
                                departureStation: selectedStations[0].station.trim(),
                                arrivalStation: selectedStations[selectedStations.length - 1].station.trim(),
                                departureTime: selectedStations[0].departureTime,
                            });
                        }
                    }
                });
            } else {
                console.error('Invalid data structure. Expected "schedule" property to exist.');
            }


            allTrips.sort((a, b) => {
                const timeA = new Date(a.departureTime).getTime();
                const timeB = new Date(b.departureTime).getTime();
                return timeA - timeB;
            });

            displayResults(allTrips);

            const resultTable = document.getElementById('resultTable');
            const noRouteMessage = document.getElementById('noRouteMessage');
            if (allTrips.length > 0) {
                resultTable.style.display = 'table';
                noRouteMessage.style.display = 'none';
            } else {
                resultTable.style.display = 'none';
                noRouteMessage.style.display = 'block';
            }
        })
        .catch(error => console.error('Error fetching JSON data:', error));
}
