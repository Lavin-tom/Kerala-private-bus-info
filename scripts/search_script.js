import kottayam from '../res/bus_stations/kottayam.js';
import alappuzha from '../res/bus_stations/alappuzha.js';
import ernakulam from  '../res/bus_stations/ernakulam.js';
import pathanamthitta from '../res/bus_stations/pathanamthitta.js';
import idukki from '../res/bus_stations/idukki.js';
import kannur from '../res/bus_stations/kannur.js';
import attingal from '../res/bus_stations/attingal.js';

var options1 = ["Choose Nearest place","ALAPUZHA","ATTINGAL","ERNAKULAM","IDUKKI","KANNUR","KOTTAYAM","KOZHIKODE","MALAPURAM","MUVATTUPUZHA","PALAAKKAD","PATHANAMTHITTA","VADAKARA","WAYANAD"];
var option2 = {};
var busStations = {
    "KOTTAYAM": kottayam,
    "ALAPPUZHA": alappuzha,
    "ERNAKULAM": ernakulam,
    "PATHANAMTHITTA": pathanamthitta,
    "IDUKKI": idukki,
    "ATTINGAL": attingal,
};

function loadOptions(selectId, options) {
    var select = document.getElementById(selectId);
    select.innerHTML = '';

    options.forEach(function (option) {
        var optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        select.add(optionElement);
    });
}

loadOptions("dropdown1", options1);

// Assuming you have a button with the id "filterButton"
document.getElementById("filterButton").addEventListener("click", function () {
    var dropdown1Value = document.getElementById("dropdown1").value;
    var dropdown3Value = document.getElementById("dropdown3").value;

	loadDropdown2(dropdown1Value);
    // Now you can use dropdown1Value and dropdown3Value
    if (dropdown1Value === dropdown3Value) {
        var selectedValue = document.getElementById("dropdown1").value;
        loadDropdown2(selectedValue);
    }
});

function loadDropdown2(selectedValue) {
    var options2Array = busStations[selectedValue] || [];
    loadOptions("dropdown2", options2Array);
    loadOptions("dropdown3", options2Array);
}

async function fetchJsonData(file) {
    try {
        const response = await fetch(file);
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        throw error;
    }
}

function sortResultsByTime(results) {
    const sortedResults = [...results];

    sortedResults.sort((a, b) => {
        return a.departureTime.localeCompare(b.departureTime);
    });

    return sortedResults;
}



function displayResults(results) {
    const table = document.getElementById('resultTable');
    const tbody = table.getElementsByTagName('tbody')[0];

    // Clear existing table body
    tbody.innerHTML = '';

    // Populate table with results
    results.forEach(result => {
        const row = tbody.insertRow();
        const values = [result.vehicleNumber, result.startStation, result.endStation, result.departureTime];

        values.forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });
}

function search() {
    try {
        // Reset the noRouteMessage element
        document.getElementById('noRouteMessage').textContent = '';

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

        // Array to store search results
        const searchResults = [];

        if (jsonData && jsonData.busSchedules && jsonData.busSchedules.length > 0) {
            let routeFound = false; // Flag to check if any route is found

            jsonData.busSchedules.forEach(schedule => {
                const routeIndex2 = schedule.route.indexOf(dropdown2Value);
                const destinationIndex2 = schedule.route.indexOf(dropdown3Value);

                if (routeIndex2 >= 0 && destinationIndex2 >= 0 && routeIndex2 < destinationIndex2) {
                    const selectedTrips = schedule.schedule.filter(trip => {
                        const startIndex = schedule.route.indexOf(dropdown2Value);
                        const endIndex = schedule.route.indexOf(dropdown3Value);
                        const stations = trip.stations;

                        return (
                            startIndex !== -1 &&
                            endIndex !== -1 &&
                            endIndex > startIndex &&
                            stations &&
                            stations[startIndex] &&
                            stations[startIndex].station === dropdown2Value &&
                            stations[endIndex] &&
                            stations[endIndex].station === dropdown3Value
                        );
                    });

                    if (selectedTrips.length > 0) {
                        // Display the table heading only when results are found
                        tableHead.style.display = 'table-header-group';
                        routeFound = true; // Set the flag to true

                        selectedTrips.forEach(trip => {
                            const stations = trip.stations;
                            const row = tableBody.insertRow();
                            const cell1 = row.insertCell(0);
                            const cell2 = row.insertCell(1);
                            const cell3 = row.insertCell(2);
                            const cell4 = row.insertCell(3);

                            cell1.textContent = schedule["Vehicle Number"];
                            cell2.textContent = stations[0].station.trim();
                            cell3.textContent = stations[stations.length - 1].station.trim();
                            cell4.textContent = stations[0].departureTime;

                            // Store relevant information in the searchResults array
                            searchResults.push({
                                vehicleNumber: schedule["Vehicle Number"],
                                startStation: stations[0].station.trim(),
                                endStation: stations[stations.length - 1].station.trim(),
                                departureTime: stations[0].departureTime
                            });
                        });
                    }
                }
            });

            if (!routeFound) {
                // Display a message when no route is found
                document.getElementById('noRouteMessage').textContent = 'No route found for the selected values.';
            }
        } else {
            console.error('Invalid data structure. Expected "busSchedules" property to exist.');
            document.getElementById('noRouteMessage').textContent = 'Invalid data structure. Please try again.';
        }

        if (dropdown2Value === dropdown3Value) {
            // Display a message when both dropdown values are the same
            document.getElementById('noRouteMessage').textContent = 'Please select different values for dropdown2 and dropdown3.';
        }

        // Print the search results array to the console
        console.log('Search Results:', searchResults);
		const sortedResults = sortResultsByTime(searchResults);
		console.log('Sorted Results:', sortedResults);
		displayResults(sortedResults);		
    } catch (error) {
        console.error('Error fetching or parsing JSON data:', error);
        document.getElementById('noRouteMessage').textContent = 'Error fetching or parsing data. Please try again.';
    }
}
