$(document).ready(function() {
    $('#exploreBtn').on('click', function() {
        // Ova funkcija će se izvršiti kad korisnik klikne na gumb "Explore"
        window.location.href = 'second.html';
    });
});

function searchAirports() {
    var cityName = $('#cityInput').val();
    
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/airports?name=' + cityName,
        headers: { 'X-Api-Key': 'd9rLLqtae8uLfBXogYJcJg==GU3hDuwHLeAnN1CK'},
        contentType: 'application/json',
        success: function(result) {
            displayAirports(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

function displayAirports(airports) {
    var airportListElement = $('#airportList');
    airportListElement.empty();

    if (airports.length === 0) {
        airportListElement.append('<p>No airports found for the specified city.</p>');
    } else {
        airports.forEach(function(airport) {
            var listItem = '<a href="third.html?airport=' + airport.name + '" class="list-group-item list-group-item-action">' +
                            airport.name +
                            '</a>';
            airportListElement.append(listItem);
        });
    }
}



