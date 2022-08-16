//var weather = 4;// x 左右 y 上下 z厚度
var animation = {};
var animation_M = {};

AFRAME.registerComponent('weather', {
    /**
     * Code within this function will be called when everything in <a-scene> is ready and loaded.
     */
   init: function () {
        let scene = document.querySelector('a-scene');
        let width = window.screen.availWidth;
        let height = window.screen.availHeight;

        scene.setAttribute("arjs", `trackingMethod: best; sourceType: webcam; debugUIEnabled: false; sourceWidth:${width};sourceHeight:${height};displayWidth:${width}; displayHeight:${height} `)
   },

   display: function(artwork, weather){
        console.log(weather);
        let weatherMarker = document.querySelector('a-marker');
        var weatherModel = document.createElement('a-asset-item');
        weatherModel.setAttribute('id', 'weatherModel');
        //choose gps container entity 
        const groupContainer = document.querySelector("#container");//document.createElement('a-entity');
        //weatherMarker.appendChild(groupContainer);

        console.log(artwork)
        //template for model parameter  {x: , y: , z: }
        //cloudy
        if(weather.toLowerCase().indexOf("cloudy") != -1){
            weatherModel.setAttribute('src', '../ARModels/cloudy/scene.gltf');
            weatherMarker.appendChild(weatherModel);
            
            if(artwork=='racecar'){
                groupContainer.setAttribute('position', '-1 0 0');
                groupContainer.setAttribute('animation', 'property: position; to: 1 0 0;  dur: 5000; easing: linear; dir: alternate; loop:true;');
                for(var i=0; i<20; i++){
                    var cloud = document.createElement('a-entity');
                    cloud.setAttribute('gltf-model', '#weatherModel');
                    cloud.setAttribute('scale', '0.015 0.014 0.015');
                    cloud.setAttribute('rotation', '180 0 0');
                    cloud.setAttribute('position', {x: getRandom(-3, 3, 3), y: getRandom(-2.5, -2, 3), z: getRandom(-4, -1, 3)});
                    groupContainer.appendChild(cloud); 
                }
               
            }
            else{
     
                groupContainer.setAttribute('position', '-1 0 0');
                groupContainer.setAttribute('animation', 'property: position; to: 1 0 0;  dur: 10000; easing: linear; dir: alternate; loop:true;');
                var scale = {x:0.015, y: 0.014, z: 0.015}; 
                var rotation= {x: 180, y: 0, z: 0};
                
                
                for(var i=0; i<=8; i++){
                    var position = {x: getRandom(-2, 2, 3), y: getRandom(-2, -1, 3), z: getRandom(-4, -3.5, 3)};
                    appendModel(scale, rotation, position, animation)
                }
            }
            
        }
        //snow
        else if(weather.toLowerCase().indexOf("snow") != -1){
            weatherModel.setAttribute('src', '../ARModels/snowflake/scene.gltf');
            weatherMarker.appendChild(weatherModel);

            if(artwork=='racecar'){
                groupContainer.setAttribute('position', '0 0 0');
                groupContainer.setAttribute('animation', 'property: position; to: 0 0 -9,  dur: 20000; easing: linear; loop:true;');
                
                for(var i=0; i<=100; i++){   
                    var snowflower = document.createElement('a-entity');
                    snowflower.setAttribute('gltf-model', '#weatherModel');
                    snowflower.setAttribute('scale', '0.01 0.01 0.005');
                    snowflower.setAttribute('rotation', {x: getRandom(0, 180, 1), y: getRandom(0, 180, 1), z: getRandom(0, 180, 1)});
                    snowflower.setAttribute('position', {x: getRandom(-3, 3, 3), y: getRandom(1, 2, 3), z: getRandom(-4, 1.5, 3)});
                    groupContainer.appendChild(snowflower);
                }
            }
            else{
                groupContainer.setAttribute('position', '0 0 -9');
                groupContainer.setAttribute('animation', 'property: position; to: 0 -3 -9;  dur: 10000; easing: linear; loop:true;');
                
                for(var i=0; i<=100; i++){
                    var snowflower = document.createElement('a-entity');
                    snowflower.setAttribute('gltf-model', '#weatherModel');
                    snowflower.setAttribute('scale', '0.01 0.01 0.005');
                    snowflower.setAttribute('rotation', {x: getRandom(0, 180, 1), y: getRandom(0, 180, 1), z: getRandom(0, 180, 1)});
                    snowflower.setAttribute('position', {x: getRandom(-3, 3, 3), y: getRandom(1, 2, 3), z: getRandom(-4, 1.5, 3)});
                    groupContainer.appendChild(snowflower);
                }
            }

        }
        
        //windy
        else if(weather.toLowerCase().indexOf("wind") != -1){
            // add leaves
            weatherModel.setAttribute('src', '../ARModels/leaf/scene.gltf');
            weatherMarker.appendChild(weatherModel);
            
            if(artwork == 'racecar'){
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
                groupContainer.setAttribute('position', '-3 3 -10');
                groupContainer.setAttribute('animation', 'property: position; to: 3 -3 -10;  dur: 4000; easing: linear; loop:true;');

                for(var i=0; i<5; i++){
                    var leaf1 = document.createElement('a-entity');
                    leaf1.setAttribute('gltf-model', '#weatherModel');
                    leaf1.setAttribute('rotation', '-90 0 0');
                    leaf1.setAttribute('scale', '1.5 1.5 1.5');
                    leaf1.setAttribute('position', {x: getRandom(-0.5, 1.5, 3), y: getRandom(1, 2, 3), z: getRandom(-2, -1, 3)});
                    leaf1.setAttribute('material', 'opacity: 0; transparent: true');
                    leaf1.setAttribute('animation', `property: rotation; to: ${getRandom(0, 720, 0)}
                    ${getRandom(0, 720, 0)} ${getRandom(0, 720, 0)}; loop: true; dur: 10000`); 

                    var leaf2 = document.createElement('a-entity');
                    leaf2.setAttribute('gltf-model', '#weatherModel');
                    leaf2.setAttribute('rotation', '-90 0 0');
                    leaf2.setAttribute('scale', '1.5 1.5 1.5');
                    leaf2.setAttribute('position', {x: getRandom(2.5, 3.5, 3), y: getRandom(1, 2, 3), z: getRandom(-3, -2, 3)});
                    leaf2.setAttribute('material', 'opacity: 0; transparent: true');
                    leaf2.setAttribute('animation', `property: rotation; to: ${getRandom(0, 720, 0)}
                    ${getRandom(0, 720, 0)} ${getRandom(0, 720, 0)}; loop: true; dur: 10000`); 
                    groupContainer.appendChild(leaf1);
                    groupContainer.appendChild(leaf2);
                }
            
            }

        }
        // rainy
        else if(weather.toLowerCase().indexOf != -1 || weather.toLowerCase().indexOf("Thunder") != -1){
            weatherModel.setAttribute('src', '../ARModels/rain/scene.gltf');
            weatherMarker.appendChild(weatherModel);


            if(artwork=='racecar'){
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
                groupContainer.setAttribute('position', '-8 0 0');
                groupContainer.setAttribute('animation', 'property: position; to: 8 0 0;  dur: 1000; easing: linear; dir: alternate; loop:true;');
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

                for (var i = 0; i < 8; i++) {
                    var position =  {
                        x: getRandom(-8, 8, 3),
                        y: getRandom(-20, -15, 3),
                        z: getRandom(3.5, 4, 3)
                    };
                    appendModel(scale, rotation, position, animation)
                    
                }
                
            }
            
        }
        //sunny  and other weather if(weather == 2)
        else {
            // add sun
            weatherModel.setAttribute('src', '../ARModels/sun1/scene.gltf');
            weatherMarker.appendChild(weatherModel);
            
            var sun = document.createElement('a-entity');
            sun.setAttribute('gltf-model', '#weatherModel');
            sun.setAttribute('scale', '0.5 0.5 0.5');
            
            if(artwork=='racecar'){
                sun.setAttribute('rotation', '0 0 0');
                sun.setAttribute('position', '33.73 2 -1.67');
            }
            else{
                sun.setAttribute('rotation', '-90 0 0');
                sun.setAttribute('position', '33.73 2 -1.67');
            }
            groupContainer.appendChild(sun);
            //weatherMarker.appendChild(sun);
        }

        //pass obejct only
        function appendModel(scale, rotation, position, animation){

           
            var model = document.createElement('a-entity');
            model.setAttribute('gltf-model', '#weatherModel');
            model.setAttribute('scale', scale);
            model.setAttribute('rotation', rotation);
            model.setAttribute('position', position);
            if(animation !== null){
                model.setAttribute("animation-mixer", animation);
            }
            groupContainer.appendChild(model); 
                
            

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

            text.setAttribute("value", "found");
            
            //set 3d models in container to markers pos and rota 
            update = setInterval(() => {

                //update pos and rota
                markerPosition = weatherMarker.object3D.position;
                markerRotation = weatherMarker.object3D.rotation;
                
                //set rota and pos
                groupContainer.object3D.setRotationFromEuler(markerRotation);
                groupContainer.setAttribute("position",{x:markerPosition.x, y:markerPosition.y, z:markerPosition.z});

            }, 16);

        })

        //when marker is not visible
        weatherMarker.addEventListener("markerLost", function(){

            text.setAttribute("value", "lost");

            //let models stay in the last marker pos and rota, when marker was still visible
            groupContainer.setAttribute("position", {x:markerPosition.x, y:markerPosition.y, z:markerPosition.z});
            groupContainer.object3D.setRotationFromEuler(markerRotation);
            
            //stop update models pos and rota
            clearInterval(update);

        })
    }
})


//})


function getRandom(min, max, decimals) {
         return (Math.random() * (max - min) + min).toFixed(decimals);
    }
