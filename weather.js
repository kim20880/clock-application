const API_KEY="9e7023e527457b26e7e0e66775990acb";
const COORDS='coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}
function handleGeoSucces(position){
   const latitude= position.coords.latitude;
   const longitude=position.coords.longitude;
   const coordsObj={
       latitude,
       longitude
   };
   saveCoords(coordsObj);

}

function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}
    function loadCoords(){
    const loadedCords=localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    } else{

    }
}

function init(){
    loadCoords();
}

init();