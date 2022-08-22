//var weather = 4;// x 左右 y 上下 z厚度
var animation = {};
var animation_M = {};
var current_weather = 0;

var dx = 0;
var dy = 0;
var dz = 0;
var s = 6; 

var gyro = true;
var track_flag = false;


AFRAME.registerComponent('weather', {
    /**
     * Code within this function will be called when everything in <a-scene> is ready and loaded.
     */
   init: function () {
        let scene = document.querySelector('a-scene');
        let width = window.screen.availWidth;
        let height = window.screen.availHeight;

        scene.setAttribute("arjs", `trackingMethod: best; sourceType: webcam; debugUIEnabled: false; sourceWidth:${width};sourceHeight:${height};displayWidth:${width}; displayHeight:${height}; maxDetectionRate:60 `)
   },

   display: function(artwork, weather){

        const cam = document.querySelector('#cam');
        //cam.setAttribute('look-controls', 'enabled:false'); 
        console.log(weather);
        let weatherMarker = document.querySelector('a-marker');
        var weatherModel = document.createElement('a-asset-item');
        weatherModel.setAttribute('id', 'weatherModel');
        //choose gps container entity 
        const groupContainer = document.querySelector("#container");//document.createElement('a-entity');
        //weatherMarker.appendChild(groupContainer);
        var track =  document.createElement('a-entity');
        const scene = document.querySelector("a-scene"); 
        console.log("passed in "+artwork)
        //if(artwork=='Racecar'){'6 6 6'
            
            // track.setAttribute('gltf-model', '#track');
            // track.setAttribute('position', '0 0 0');
            // //track.setAttribute('scale', `6 6 6`);
            // var track_scale = {x: s, y: s, z: s}; 
            // console.log(track_scale);
            // track.setAttribute('scale', track_scale);
            // track.setAttribute('rotation', '-90 0 0');
            // track.setAttribute('id', "trackModel"); 
            // //track.setAttribute('gps-entity-place', {longitude: 51.5247038455639, latitude: -0.132348748884972})
            // track.setAttribute('animation-mixer',"clip:Animation; loop:infinite")
            // groupContainer.appendChild(track); 
            //track.setAttribute()
        //}

        //template for model parameter  {x: , y: , z: }
        //cloudy 1
        if(weather.toLowerCase().indexOf("cloud") != -1){
            weatherModel.setAttribute('src', '../ARModels/cloudy/scene.gltf');
            weatherMarker.appendChild(weatherModel);
            current_weather = 1;
            if(artwork=='Racecar'){
                groupContainer.setAttribute('position', '-1 0 0');
                //groupContainer.setAttribute('animation', 'property: position; to: 1 0 0;  dur: 5000; easing: linear; dir: alternate; loop:true;');
                // for(var i=0; i<20; i++){
                //     var cloud = document.createElement('a-entity');
                //     cloud.setAttribute('gltf-model', '#weatherModel');
                //     cloud.setAttribute('scale', '0.015 0.014 0.015');
                //     cloud.setAttribute('rotation', '180 0 0');
                //     cloud.setAttribute('position', {x: getRandom(-3, 3, 3), y: getRandom(-2.5, -2, 3), z: getRandom(-4, -1, 3)});
                //     groupContainer.appendChild(cloud); 
                // }
               
            }
            else{
                
                var scale = {x:0.1, y: 0.1, z: 0.1}; 
                var rotation= {x: 180, y: 0, z: 0};
                
                
                for(var j=-1; j<2; j++){
                    
                    for (var i = 0; i < 8; i++) {
        
                        var random_x = getRandom(j*20, 0, 0);
                        
                        var random_y = getRandom(-8, 3, 0);
                        var random_z = getRandom(-4, -6, 0);
                        var position = {x: random_x, y: random_y, z: random_z};
                        var to_x = 10+parseInt(random_x);
                        console.log(position)
                        var model = document.createElement('a-entity');
                        model.setAttribute('gltf-model', '#weatherModel');
                        model.setAttribute('scale', scale);
                        model.setAttribute('rotation', rotation);
                        model.setAttribute('position', position);
                        model.setAttribute('animation', `property: position; to: ${to_x} ${random_y} ${random_z};  dur: 5000; easing: linear; dir: alternate; loop:true;`);
                        model.setAttribute('animation-mixer', animation);
                        groupContainer.appendChild(model);
                        
                    }
                    j++; 
                }
                
            }
            
        }
        //snow 2 
        else if(weather.toLowerCase().indexOf("snow") != -1){
            current_weather = 2;
            weatherModel.setAttribute('src', '../ARModels/snowflake/scene.gltf');
            weatherMarker.appendChild(weatherModel);

            if(artwork=='Racecar'){
                groupContainer.setAttribute('position', '0 0 0');
                groupContainer.setAttribute('animation', 'property: position; to: 0 0 -9,  dur: 20000; easing: linear; loop:true;');
                
                for(var i=0; i<=100; i++){   
                    var snowflake = document.createElement('a-entity');
                    snowflake.setAttribute('gltf-model', '#weatherModel');
                    snowflake.setAttribute('scale', '0.01 0.01 0.005');
                    snowflake.setAttribute('rotation', {x: getRandom(0, 180, 1), y: getRandom(0, 180, 1), z: getRandom(0, 180, 1)});
                    snowflake.setAttribute('position', {x: getRandom(-3, 3, 3), y: getRandom(1, 2, 3), z: getRandom(-4, 1.5, 3)});
                    groupContainer.appendChild(snowflake);
                }
            }
            else{
                groupContainer.setAttribute('position', '0 0 -9');
                
                
                for(var i=0; i<=200; i++){
                    var random_x =  getRandom(-10, 10, 0);
                    var random_y =getRandom(-20, 20, 0);
                    var random_z = getRandom(-8, 0, 1);
                    var position = {x: random_x, y: random_y, z: random_z};
                    
                    var to_y = -3+parseFloat(random_y);
                    var to_z = 9+parseFloat(random_z);
                    var dur = getRandom(6000, 12000, 1)
                    var snowflake = document.createElement('a-entity');
                    snowflake.setAttribute('gltf-model', '#weatherModel');
                    snowflake.setAttribute('scale', '0.03 0.03 0.005');
                    snowflake.setAttribute('rotation', {x: getRandom(0, 180, 1), y: getRandom(0, 180, 1), z: getRandom(0, 180, 1)});
                    snowflake.setAttribute('position', position);
                    snowflake.setAttribute('animation', `property: rotation; to: ${getRandom(0, 720, 0)}
                    ${getRandom(0, 720, 0)} ${getRandom(0, 720, 0)}; loop: true; dur: 8000`); 
                    snowflake.setAttribute('animation__2', `property: position; to: ${random_x} ${random_y} ${to_z};  dur: ${dur}; easing: linear; loop:true;`);
                    groupContainer.appendChild(snowflake);
                }
            }

        }
        
        //windy 3
        else if(weather.toLowerCase().indexOf("wind") != -1){
            current_weather = 3; 
            // add leaves
            weatherModel.setAttribute('src', '../ARModels/leaf/scene.gltf');
            weatherMarker.appendChild(weatherModel);
            
            if(artwork == 'Racecar'){
                groupContainer.setAttribute('position', '-3 0 -20');
                groupContainer.setAttribute('animation', 'property: position; to: 3 0 -20;  dur: 4000; easing: linear; loop:true;');
                
                for(var i=0; i<20; i++){
                    var leaf1 = document.createElement('a-entity');
                    leaf1.setAttribute('gltf-model', '#weatherModel');
                    leaf1.setAttribute('rotation', '-90 0 0');
                    leaf1.setAttribute('scale', '2 2 2');
                    leaf1.setAttribute('position', {x: getRandom(-5, 5, 3), y: getRandom(4, -4, 3), z: getRandom(-8, -4, 3)});
                    leaf1.setAttribute('material', 'opacity: 0; transparent: true');
                    leaf1.setAttribute('animation', `property: rotation; to: ${getRandom(0, 720, 0)}
                    ${getRandom(0, 720, 0)} ${getRandom(0, 720, 0)}; loop: true; dur: 8000`); 

                    groupContainer.appendChild(leaf1);
                    
                }
            }
            else{
               
                

                for(var i=0; i<8; i++){
                    var random_x = getRandom(-5, 5, 1);
                    var random_y =getRandom(1, 2, 3);
                    var random_z = getRandom(-4, -8, 3);
                    var position = {x: random_x, y: random_y, z: random_z};
                    var to_x = 10+parseFloat(random_x);
                    var to_y = -3+parseFloat(random_y);
                    var to_z = 10+parseFloat(random_z);
                    var leaf1 = document.createElement('a-entity');
                    leaf1.setAttribute('gltf-model', '#weatherModel');
                    leaf1.setAttribute('rotation', '-90 0 0');
                    leaf1.setAttribute('scale', '5 5 5');
                    leaf1.setAttribute('position', position);
                    leaf1.setAttribute('material', 'opacity: 0; transparent: true');
                    leaf1.setAttribute('animation', `property: rotation; to: ${getRandom(0, 720, 0)}
                    ${getRandom(0, 720, 0)} ${getRandom(0, 720, 0)}; loop: true; dur: 4000; dir:alternate`); 

                    leaf1.setAttribute('animation__2', `property: position; to: ${to_x} ${to_y} ${to_z};  dur: 3000; easing: linear; loop:true;`);

                    random_x = getRandom(-10, 5, 1);   
                    random_y =  getRandom(1, 2, 3);
                    random_z = getRandom(-0, -3, 3);
                    to_x = 10+parseFloat(random_x);
                    to_y = -3+parseFloat(random_y);
                    to_z = 10+parseFloat(random_z);
                    var leaf2 = document.createElement('a-entity');
                    leaf2.setAttribute('gltf-model', '#weatherModel');
                    leaf2.setAttribute('rotation', '-90 0 0');
                    leaf2.setAttribute('scale', '5 5 5');
                    leaf2.setAttribute('position', position);
                    leaf2.setAttribute('material', 'opacity: 0; transparent: true');
                    leaf2.setAttribute('animation', `property: rotation; to: ${getRandom(0, 720, 0)}
                    ${getRandom(0, 720, 0)} ${getRandom(0, 720, 0)}; loop: true; dur: 4000; dir:alternate`); 
                    leaf2.setAttribute('animation__2', `property: position; to: ${to_x} ${to_y} ${to_z};  dur: 3000; easing: linear; loop:true;`);
                    groupContainer.appendChild(leaf1);
                    groupContainer.appendChild(leaf2);
                }
            
            }

        }
        // rainy 4
        else if(weather.toLowerCase().indexOf("rain") != -1 || weather.toLowerCase().indexOf("thunder") != -1){
            current_weather = 4;
            weatherModel.setAttribute('src', '../ARModels/rain/scene.gltf');
            weatherMarker.appendChild(weatherModel);


            if(artwork=='Racecar'){
                groupContainer.setAttribute('position', '-4 0 0');
                groupContainer.setAttribute('animation', 'property: position; to: 4 0 0;  dur: 5000; easing: linear; dir: alternate; loop:true;');

                for (var i = 0; i < 2; i++) {
                    var rain = document.createElement('a-entity')
                    rain.setAttribute('gltf-model', '#weatherModel')
                    rain.setAttribute("animation-mixer", "clip:Take 001; loop:infinite")
                    rain.setAttribute("rotation", "0 0 0")
                    material="opacity: 0.0; transparent: true">
                    rain.setAttribute('opacity', '0.5')
                    rain.setAttribute('transparent', true)
                    rain.setAttribute('position',
                        {
                            x: getRandom(-2, 2, 3),
                            y: -14,
                            z: getRandom(-1, -4, 3)
                        });
                    rain.setAttribute('scale', {x: 0.01, y: 0.01, z: 0.01});
                    groupContainer.appendChild(rain);
                }
            }
            else{
                //groupContainer.setAttribute('position', '-8 0 0');
                //groupContainer.setAttribute('animation', 'property: position; to: 8 0 0;  dur: 1000; easing: linear; dir: alternate; loop:true;');
                // for (var i = 0; i < 8; i++) {
                //     var rain = document.createElement('a-entity');
                //     rain.setAttribute('gltf-model', '#weatherModel')
                //     rain.setAttribute("animation-mixer", "clip:Take 001; loop:infinite")
                //     rain.setAttribute("rotation", "-90 0 0")
                //     rain.setAttribute('position',
                //         {
                //             x: getRandom(-8, 8, 3),
                //             y: getRandom(-20, -15, 3),
                //             z: getRandom(3.5, 4, 3)
                //         });
                //     rain.setAttribute('scale', {x: 0.01, y: 0.01, z: 0.01});
                //     groupContainer.appendChild(rain);
                // }
                var scale = {x: 0.01, y: 0.01, z: 0.01};
                var rotation = {x:-90, y:0,z:0};
                var animation = {clip: "Take 001", loop: "infinite"};
                for(var j=-1; j<2; j++){
                    
                    for (var i = 0; i < 8; i++) {
        
                        var random_x = getRandom(j*20, 0, 0);
                        
                        var random_y = getRandom(-8, 3, 0);
                        var random_z = getRandom(-4, -6, 0);
                        var position = {x: random_x, y: random_y, z: random_z};
                        var to_x = 10+parseInt(random_x);
                        console.log(position)
                        var model = document.createElement('a-entity');
                        model.setAttribute('gltf-model', '#weatherModel');
                        model.setAttribute('scale', scale);
                        model.setAttribute('rotation', rotation);
                        model.setAttribute('position', position);
                        model.setAttribute('animation', `property: position; to: ${to_x} ${random_y} ${random_z};  dur: 5000; easing: linear; dir: alternate; loop:true;`);
                        model.setAttribute('animation-mixer', animation);
                        groupContainer.appendChild(model);
                        
                    }
                    j++; 
                }
                
                
            }
            
        }
        //sunny  and other weather if(weather == 2) 5
        else {
            current_weather = 5;
            // add sun
            weatherModel.setAttribute('src', '../ARModels/sun1/scene.gltf');
            weatherMarker.appendChild(weatherModel);
            
            var sun = document.createElement('a-entity');
            sun.setAttribute('gltf-model', '#weatherModel');
            sun.setAttribute('scale', '3 3 3');
            
            if(artwork=='Racecar'){
                sun.setAttribute('rotation', '0 0 0');
                sun.setAttribute('position', '33.73 2 -1.67');
            }
            else{
                sun.setAttribute('rotation', '-90 0 0');
                sun.setAttribute('position', '204 0 -5');
            }
            groupContainer.appendChild(sun);
            //weatherMarker.appendChild(sun);
        }
        groupContainer.setAttribute("visible", "false"); 
        

        function setPosition( i ){
            var x = parseFloat(markerPosition.x)//+parseFloat(dx);
            var y = parseFloat(markerPosition.y)//+parseFloat(dy);
            var z = parseFloat(markerPosition.z)//+parseFloat(dz);
            var track_scale = {x: s, y: s, z: s}; 
            //console.log(track_scale);
            track.setAttribute('scale', track_scale);
            if(i==1){
                // var x = markerPosition.x+dx-5;
                // var y = markerPosition.y+dy+8;
                // var z = markerPosition.z+dz-12;
                groupContainer.setAttribute("position",{x:x-5, y:y+8, z:z-12});
                if(!track_flag){
                    var trackPosition = document.querySelector("#trackModel").getAttribute("position");
                    console.log(trackPosition.x);
                    track.setAttribute('position', {x:parseFloat(trackPosition.x)+5, y:parseFloat(trackPosition.y)-8, z:parseFloat(trackPosition.z)+12}); 
                    track_flag = true; 
                }
                //groupContainer.setAttribute('animation', `property: position; to:  ${x+10} ${y} ${z};  dur: 10000; easing: linear; dir: alternate; loop:true;`);
            }else if(i==2){
                groupContainer.setAttribute("position",{x:x, y:y, z:z-3}); 
            }else if(i==3){
                groupContainer.setAttribute("position",{x:x, y:y, z:z}); 
            }else if(i==4){
                groupContainer.setAttribute("position",{x:x, y:y-5.5, z:z});
            }else if(i==5){
                groupContainer.setAttribute("position",{x:x, y:y, z:z}); 
            }
        }
        //text for testing
        var text = document.querySelector("#top");

        //select entity container and set to gps relative position. 
        

        //get marker postion and rotation every 16ms. 
        let markerPosition;
        let markerRotation;
        let update;

        //when the marker is visible
        weatherMarker.addEventListener("markerFound", function(){
            groupContainer.setAttribute("visible", "true");
            //text.setAttribute("value", "found enable:false");
            text.setAttribute("value", `found+dx:${dx}+dy${dy}+dz${dz}+scale${s}`);
            //disable the gyroscope to avoid distortion  
            //if(gyro){
            cam.setAttribute("look-controls", "magicWindowTrackingEnabled:false")
                //scene.setAttribute("look-controls", "gyroEnabled:false");
                //gyro = false; 
            //}
            
            //set 3d models in container to markers pos and rota 
            update = setInterval(() => {
                text.setAttribute("value", `found+dx:${dx}+dy${dy}+dz${dz}+scale${s}`);

                //update pos and rota
                markerPosition = weatherMarker.object3D.position;
                markerRotation = weatherMarker.object3D.rotation;
                //if(artwork=='Racecar'){
                    //track.object3D.setRotationFromEuler(markerRotation);
                    //track.setAttribute("position",{x:markerPosition.x+dx, y:markerPosition.y+dy, z:markerPosition.z+dz});
                //}
                
                //set rota and pos
                //groupContainer.setAttribute("animation", )
                groupContainer.object3D.setRotationFromEuler(markerRotation);
                setPosition(current_weather);
                //groupContainer.setAttribute("position",{x:markerPosition.x+dx, y:markerPosition.y+dy, z:markerPosition.z+dz});

            }, 16);
            

        })

        //when marker is not visible
        weatherMarker.addEventListener("markerLost", function(){
            // markerPosition = weatherMarker.object3D.position;
            // markerRotation = weatherMarker.object3D.rotation;
            text.setAttribute("value", `lost+dx:${dx}+dy${dy}+dz${dz}+scale${scale}`);
            cam.setAttribute("look-controls", "magicWindowTrackingEnabled:true")
            //if(!gyro){

                //scene.setAttribute("look-controls", "gyroEnabled:true");
                //gyro = true; 
            //}
            //let models stay in the last marker pos and rota, when marker was still visible
            // groupContainer.setAttribute("position", {x:markerPosition.x, y:markerPosition.y, z:markerPosition.z});
            // groupContainer.object3D.setRotationFromEuler(markerRotation);
            groupContainer.object3D.setRotationFromEuler(markerRotation);
            setPosition(current_weather);
            //stop update models pos and rota
            clearInterval(update);

        })
    },

    setTrackP: function(){
        var track = document.querySelector("#trackModel");
        var trackP = track.object3D.position;
        var T_x = parseFloat(trackP.x)+parseFloat(dx);
        var T_y = parseFloat(trackP.y)+parseFloat(dy);
        var T_z = parseFloat(trackP.z)+parseFloat(dz);
        track.setAttribute("position", {x:T_x, y:T_y, z:T_z}); 
    }
})
//snow scale up2 y +0.5


//})

function AX(){

    dx+=0.5;
    var component = document.querySelector('[weather]').components.weather; 
    component.setTrackP();
}
function AY(){
    dy+=0.5;
    var component = document.querySelector('[weather]').components.weather; 
    component.setTrackP();
}
function AZ(){
    dz+=0.5;
    var component = document.querySelector('[weather]').components.weather; 
    component.setTrackP();
}
function DX(){
    dx-=0.5;
    var component = document.querySelector('[weather]').components.weather; 
    component.setTrackP();
}
function DY(){
    dy-=0.5;
    var component = document.querySelector('[weather]').components.weather; 
    component.setTrackP();
}
function DZ(){
    dz-=0.5;
    var component = document.querySelector('[weather]').components.weather; 
    component.setTrackP();
}

function SU(){
    s+=0.5;
}

function SD(){
    s-=0.5;
}

function getRandom(min, max, decimals) {
         return (Math.random() * (max - min) + min).toFixed(decimals);
    }

function weather(artwork, weather){
    var component = document.querySelector('[weather]').components.weather; 
    component.display(artwork, weather);
}