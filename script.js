document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  function initMap() {
    const defaultLocation = { lat: 40.7128, lng: -74.0060 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: defaultLocation,
    });
  
    new google.maps.Marker({
      position: defaultLocation,
      map: map,
      title: 'Your Location',
    });
  }
  let map;
  let userMarker;
  
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: 0, lng: 0 }
    });
  }
  
  function locateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(userLocation);
        map.setZoom(14);
  
        if (userMarker) {
          userMarker.setMap(null);
        }
  
        userMarker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: 'You are here'
        });
      }, error => {
        console.error('Error getting location', error);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  
  function focusMap(category) {
    const locations = {
      cafes: { lat: 40.7128, lng: -74.0060 },
      'tourist-spots': { lat: 40.6892, lng: -74.0445 },
      hotels: { lat: 40.7580, lng: -73.9855 }
    };
  
    map.setCenter(locations[category]);
    map.setZoom(14);
  }
    