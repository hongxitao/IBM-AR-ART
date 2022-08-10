var weather = 4;

AFRAME.registerComponent('weather', {
    /**
     * Code within this function will be called when everything in <a-scene> is ready and loaded.
     */
   init: function () {
        let scene = document.querySelector('a-scene');
        let width = window.screen.availWidth;
        let height = window.screen.availHeight;

        scene.setAttribute("arjs", `trackingMethod: best; sourceType: webcam; debugUIEnabled: false; sourceWidth:${width};sourceHeight:${height};displayWidth:${width}; displayHeight:${height} `)
   }
})
    function display(artwork){
        let weatherMarker = document.querySelector('a-marker');
        var weatherModel = document.createElement('a-asset-item');
        weatherModel.setAttribute('id', 'weatherModel');
        var groupContainer = document.createElement('a-entity');
        weatherMarker.appendChild(groupContainer);
        
        console.log(artwork)
        
        //cloudy
        if(weather == 0){
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
                    cloud.setAttribute('position', {x: getRandomArbitrary(-3, 3, 3), y: getRandomArbitrary(-2.5, -2, 3), z: getRandomArbitrary(-4, -1, 3)});
                    groupContainer.appendChild(cloud); 
                    console.log(1)
                }
            }
            else{
                groupContainer.setAttribute('position', '-1 0 0');
                groupContainer.setAttribute('animation', 'property: position; to: 1 0 0;  dur: 10000; easing: linear; dir: alternate; loop:true;');
                for(var i=0; i<=8; i++){
                    var cloud = document.createElement('a-entity');
                    cloud.setAttribute('gltf-model', '#weatherModel');
                    cloud.setAttribute('scale', '0.015 0.014 0.015');
                    cloud.setAttribute('rotation', '180 0 0');
                    cloud.setAttribute('position', {x: getRandomArbitrary(-2, 2, 3), y: getRandomArbitrary(-1, 1, 3), z: getRandomArbitrary(-4, -3.5, 3)});
                    groupContainer.appendChild(cloud); 
                }
            }
            
        }
        //snow
        else if(weather == 1){
            weatherModel.setAttribute('src', '../ARModels/snow/scene.gltf');
            weatherMarker.appendChild(weatherModel);

            if(artwork=='racecar'){
                groupContainer.setAttribute('position', '0 0 0');
                groupContainer.setAttribute('animation', 'property: position; to: 0 -3 0;  dur: 10000; easing: linear; loop:true;');
                
                for(var i=0; i<=100; i++){
                    var snowflower = document.createElement('a-entity');
                    snowflower.setAttribute('gltf-model', '#weatherModel');
                    snowflower.setAttribute('scale', '0.7 0.7 0.7');
                    snowflower.setAttribute('rotation', {x: getRandomArbitrary(0, 180, 1), y: getRandomArbitrary(0, 180, 1), z: getRandomArbitrary(0, 180, 1)});
                    snowflower.setAttribute('position', {x: getRandomArbitrary(-3, 3, 3), y: getRandomArbitrary(1, 2, 3), z: getRandomArbitrary(-4, 1.5, 3)});
                    groupContainer.appendChild(snowflower);
                }
            }
            else{
                groupContainer.setAttribute('position', '0 0 -2');
                groupContainer.setAttribute('animation', 'property: position; to: 0 0 0;  dur: 10000; easing: linear; loop:true;');
                
                for(var i=0; i<=100; i++){
                    var snowflower = document.createElement('a-entity');
                    snowflower.setAttribute('gltf-model', '#weatherModel');
                    snowflower.setAttribute('scale', '0.7 0.7 0.7');
                    snowflower.setAttribute('rotation', {x: getRandomArbitrary(0, 180, 1), y: getRandomArbitrary(0, 180, 1), z: getRandomArbitrary(0, 180, 1)});
                    snowflower.setAttribute('position', {x: getRandomArbitrary(-3, 3, 3), y: getRandomArbitrary(1, 2, 3), z: getRandomArbitrary(-4, 1.5, 3)});
                    groupContainer.appendChild(snowflower);
                }
            }
            
        }
        //sunny
        else if(weather == 2){
            // add sun
            weatherModel.setAttribute('src', '../ARModels/sun1/scene.gltf');
            weatherMarker.appendChild(weatherModel);
            
            var sun = document.createElement('a-entity');
            sun.setAttribute('gltf-model', '#weatherModel');
            sun.setAttribute('scale', '0.5 0.5 0.5');
            sun.setAttribute('rotation', '-90 0 0');
            sun.setAttribute('position', '33.73 2 -1.67');
            weatherMarker.appendChild(sun);
       
            
        }
        //windy
        else if(weather == 3){
            // add leaves
            weatherModel.setAttribute('src', '../ARModels/leaf/scene.gltf');
            weatherMarker.appendChild(weatherModel);
            
            groupContainer.setAttribute('position', '3 0 -3');
            groupContainer.setAttribute('animation', 'property: position; to: -3 0 3;  dur: 5000; easing: linear; loop:true;');

            for(var i=0; i<5; i++){
                var leaf1 = document.createElement('a-entity');
                leaf1.setAttribute('gltf-model', '#weatherModel');
                leaf1.setAttribute('rotation', '-90 0 0');
                leaf1.setAttribute('scale', '1.5 1.5 1.5');
                leaf1.setAttribute('position', {x: getRandomArbitrary(-0.5, 1.5, 3), y: getRandomArbitrary(1, 2, 3), z: getRandomArbitrary(-2, -1, 3)});
                leaf1.setAttribute('material', 'opacity: 0; transparent: true');
                leaf1.setAttribute('animation', `property: rotation; to: ${getRandomArbitrary(0, 720, 0)}
                ${getRandomArbitrary(0, 720, 0)} ${getRandomArbitrary(0, 720, 0)}; loop: true; dur: 10000`); 

                var leaf2 = document.createElement('a-entity');
                leaf2.setAttribute('gltf-model', '#weatherModel');
                leaf2.setAttribute('rotation', '-90 0 0');
                leaf2.setAttribute('scale', '1.5 1.5 1.5');
                leaf2.setAttribute('position', {x: getRandomArbitrary(2.5, 3.5, 3), y: getRandomArbitrary(1, 2, 3), z: getRandomArbitrary(-3, -2, 3)});
                leaf2.setAttribute('material', 'opacity: 0; transparent: true');
                leaf2.setAttribute('animation', `property: rotation; to: ${getRandomArbitrary(0, 720, 0)}
                ${getRandomArbitrary(0, 720, 0)} ${getRandomArbitrary(0, 720, 0)}; loop: true; dur: 10000`); 
                groupContainer.appendChild(leaf1);
                groupContainer.appendChild(leaf2);
            }
        
        }
        // rainy
        else if(weather == 4){
            weatherModel.setAttribute('src', '../ARModels/rain/scene.gltf');
            weatherMarker.appendChild(weatherModel);

            for (var i = 0; i < 8; i++) {
                var rain = document.createElement('a-entity');
                rain.setAttribute('gltf-model', '#weatherModel')
                rain.setAttribute("animation-mixer", "clip:Take 001; loop:infinite")
                rain.setAttribute("rotation", "-90 0 0")
                rain.setAttribute('position',
                    {
                        x: getRandomArbitrary(-8, 8, 3),
                        y: getRandomArbitrary(-20, -15, 3),
                        z: getRandomArbitrary(3.5, 4, 3)
                    });
                rain.setAttribute('scale', {x: 0.01, y: 0.01, z: 0.01});
                //model.setAttribute('animation', 'dur:5000; from: 0 0 0; to 30000 30000 30000; loop:-1; property:position')
                // const weather_animation_attributes = {
                //     property: 'position',
                //     to: '0 0 0',
                //     loop: true,
                //     dur: '15000'
                // }
                //rain.setAttribute('animation', weather_animation_attributes)
                weatherMarker.appendChild(rain);
            }
        }
       
    
    }


//})


function getRandomArbitrary(min, max, decimals) {
         return (Math.random() * (max - min) + min).toFixed(decimals);
    }
