// getting places from APIs
// function loadPlaces(position) {
//     const params = {
//         radius: 300,    // search places not farther than this value (in meters)
//         clientId: '<YOUR-CLIENT-ID>',
//         clientSecret: 'YOUR-CLIENT-SECRET',
//         version: '20300101',    // foursquare versioning, required but unuseful for this demo
//     };

//     // CORS Proxy to avoid CORS problems
//     const corsProxy = 'https://cors-anywhere.herokuapp.com/';

//     // Foursquare API (limit param: number of maximum places to fetch)
//     const endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
//         &ll=${position.latitude},${position.longitude}
//         &radius=${params.radius}
//         &client_id=${params.clientId}
//         &client_secret=${params.clientSecret}
//         &limit=30 
//         &v=${params.version}`;
//     return fetch(endpoint)
//         .then((res) => {
//             return res.json()
//                 .then((resp) => {
//                     return resp.response.venues;
//                 })
//         })
//         .catch((err) => {
//             console.error('Error with places API', err);
//         })
// };

let places = [
    {
        lat: "25.035342443040633",
        lng: "121.43148178559154",
        name: "聖言樓"
    },
    {
        lat: "25.0359312591485",
        lng: "121.43142559368194",
        name: "百鍊廳"
    },
    {
        lat: "25.035920742042894",
        lng: "121.4305759064258",
        name: "濟時樓"
    },
    {
        lat: "25.035775605747382",
        lng: "121.43097056987368",
        name: "理園"
    },
];


window.onload = () => {
    const scene = document.querySelector('a-scene');

    // first get current user location
    // return navigator.geolocation.getCurrentPosition(function (position) {

    // than use it to load from remote APIs some places nearby
    // loadPlaces(position.coords)
    // .then((places) => {
    places.forEach((place) => {
        const latitude = place.lat;
        const longitude = place.lng;

        // add place name
        const placeText = document.createElement('a-link');
        placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        placeText.setAttribute('title', place.name);
        placeText.setAttribute('scale', '30 30 30');

        placeText.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(placeText);
    });
    // })
    // },
    // (err) => console.error('Error in retrieving position', err),
    // {
    //     enableHighAccuracy: true,
    //     maximumAge: 0,
    //     timeout: 27000,
    // }
    // );
};