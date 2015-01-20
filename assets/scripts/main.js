// google maps code
function initialize() {
    'use strict';
    var myLatlng = new google.maps.LatLng(42.241624, -83.588372),
        mapCanvas = document.getElementById("map"),
        mapOptions = {
            center: myLatlng,
            zoom: 5,
            disableDefaultUI: true,
            scrollwheel: false,
            draggable: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
                featureType: 'landscape',
                stylers: [{saturation: -100}, {lightness: 65}, {visibility: 'on'}]
            }, {
                featureType: 'poi',
                stylers: [{saturation: -100}, {lightness: 51}, {visibility: 'simplified'}]
            }, {
                featureType: 'road.highway',
                stylers: [{saturation: -100}, {visibility: 'simplified'}]
            }, {
                featureType: 'road.arterial',
                stylers: [{saturation: -100}, {lightness: 30}, {visibility: 'on'}]
            }, {
                featureType: 'road.local',
                stylers: [{saturation: -100}, {lightness: 40}, {visibility: 'on'}]
            }, {
                featureType: 'transit',
                stylers: [{saturation: -100}, {visibility: 'simplified'}]
            }, {
                featureType: 'administrative.province',
                stylers: [{visibility: 'off'}]
            }, {
                featureType: 'administrative.locality',
                stylers: [{visibility: 'off'}]
            }, {featureType: 'administrative.neighborhood', stylers: [{visibility: 'on'}]}, {
                featureType: 'water',
                elementType: 'labels',
                stylers: [{visibility: 'on'}, {lightness: -25}, {saturation: -100}]
            }, {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{hue: '#ffff00'}, {lightness: -25}, {saturation: -97}]
            }]
        },
        map = new google.maps.Map(mapCanvas, mapOptions),
        marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });
}
google.maps.event.addDomListener(window, 'load', initialize);

(function ($) {
    'use strict';
    var ctx = document.getElementById("chart").getContext("2d"),
        options = {},
        data = {
            labels: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'Python', 'Java', 'PHP', 'SQL', 'No-SQL', 'Useability', 'Software Design', 'Mobile'],
            datasets: [
                {
                    label: 'My Skills',
                    fillColor: 'rgba(151,187,205,0.5)',
                    strokeColor: 'rgba(151,187,205,0.8)',
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [90, 85, 92, 40, 45, 20, 60, 70, 30, 85, 85, 65]
                }
            ]
        },
        myBarChart = new Chart(ctx).Radar(data, options);;

    $('.e-nav').click(function (e) {
        e.preventDefault();

        var loc = e.target.href.split('#')[1];
        $('html, body').animate({
            scrollTop: $('#' + loc).offset().top - 20
        }, 1200);
    });

})($);
