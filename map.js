
// Initialising  and adding the map.
function initMap() {
    // Location of GirlCode.
    const girlCode = { lat: -26.001969812119484, lng: 28.12699797927761 };
    // Centering map at Girlcode.
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: girlCode,
    });
    // Marker positioned at Girlcode.
    const marker = new google.maps.Marker({
      position: girlCode,
      map: map,
    });
  }

 

      


