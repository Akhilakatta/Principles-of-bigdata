/**
 * Created by Ahmed on 11/23/2016.
 */

function initMap() {

    var center = {lat: 37.2582812, lng: -104.6538703};

     var markerdata = [{lat: 45.542094, lng: -122.9346037},
            {lat: 39.0997, lng: -94.5786},
         {lat: 33.7676338, lng: -84.5606894},
         {lat: 25.7823072, lng: -80.3010438},
         {lat: 27.5222935, lng: -82.2993453},
         {lat: 39.2846854, lng: -76.6905261},
         {lat: 32.8203525, lng: -97.0115304},
         {lat: 33.4538609, lng: -86.8096141},
         {lat: 25.8795829, lng: -80.1374577},
         {lat: 33.8684808, lng: -7425166}

         ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: center
    });

     for (i = 0; i < markerdata.length; i++) {

          var marker = new google.maps.Marker({
             position: markerdata[i],
             map: map
         });
     }



}

