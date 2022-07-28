function addRacetrack(){
    var sceneE1 = document.querySelector('a-scene')


    var racetrack = document.createElement('a-asset-item')
    racetrack.setAttribute('id', 'racetrack')
    racetrack.setAttribute('src', '/model_asset/race_track/track.gltf')
    sceneE1.appendChild(racetrack)


    var race_track_model = document.createElement('a-entity')
    race_track_model.setAttribute("gltf-model", '#racetrack')
    race_track_model.setAttribute('position', 
        {x: 0, y: 0, z: -2});
    race_track_model.setAttribute('scale', {x: 1, y: 1, z: 1});
    race_track_model.setAttribute('rotation', {x:-90, y:0, z: 0})
    sceneE1.appendChild(race_track_model)

}
    
function alertA(){
  alert("aaaaaaa")
}

  