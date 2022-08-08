var weather = 2;

AFRAME.registerComponent('weather', {
    /**
     * Code within this function will be called when everything in <a-scene> is ready and loaded.
     */
    init: function () {
        let sceneE1 = document.querySelector('a-scene');
        var weatherModel = document.createElement('a-asset-item');
        weatherModel.setAttribute('id', 'weatherModel');
        var groupContainer = document.createElement('a-entity');
        sceneE1.appendChild(groupContainer);
        
        
        //cloudy
        if(weather == 0){
            weatherModel.setAttribute('src', '../ARModels/cloudy/scene.gltf');
            sceneE1.appendChild(weatherModel);

            groupContainer.setAttribute('position', '-1 0 0');
            groupContainer.setAttribute('animation', 'property: position; to: 1 0 0;  dur: 10000; easing: linear; dir: alternate; loop:true;');
            for(let i=0; i<=8; i++){
                var cloud = document.createElement('a-entity');
                cloud.setAttribute('gltf-model', '#weatherModel');
                cloud.setAttribute('scale', '0.015 0.014 0.015');
                cloud.setAttribute('position', {x: getRandomArbitrary(-2, 0.3, 3), y: 2.1, z: getRandomArbitrary(-1, 1, 3)});
                groupContainer.appendChild(cloud);
            }
        }
        //snow
        else if(weather == 1){
            weatherModel.setAttribute('src', '../ARModels/snow/scene.gltf');
            sceneE1.appendChild(weatherModel);

            groupContainer.setAttribute('position', '0 1 0');
            groupContainer.setAttribute('animation', 'property: position; to: 0 -0.5 0;  dur: 10000; easing: linear; loop:true;');
            
            for(let i=0; i<=50; i++){
                var snowflower = document.createElement('a-entity');
                snowflower.setAttribute('gltf-model', '#weatherModel');
                snowflower.setAttribute('scale', '0.2 0.2 0.2');
                snowflower.setAttribute('rotation', {x: getRandomArbitrary(60, 130, 1), y: getRandomArbitrary(0, 90, 1), z: getRandomArbitrary(0, 90, 1)});
                snowflower.setAttribute('position', {x: getRandomArbitrary(-0.5, 0.5, 3), y: getRandomArbitrary(1, 2, 3), z: getRandomArbitrary(-1, 0, 3)});
                groupContainer.appendChild(snowflower);
            }
            
        }
        //sunny
        else if(weather == 2){
            // add sun
            weatherModel.setAttribute('src', '../ARModels/sun1/scene.gltf');
            sceneE1.appendChild(weatherModel);
            
            var sun = document.createElement('a-entity');
            sun.setAttribute('gltf-model', '#weatherModel');
            sun.setAttribute('scale', '0.5 0.5 0.5');
            sun.setAttribute('rotation', '0 180 0');
            sun.setAttribute('position', '-33 1.9 -5');
            sceneE1.appendChild(sun);

            // add clouds
            var cloudModel = document.createElement('a-asset-item');
            cloudModel.setAttribute('id', 'cloudModel');
            cloudModel.setAttribute('src', '../ARModels/cloudy/scene.gltf');
            sceneE1.appendChild(cloudModel);

            groupContainer.setAttribute('position', '-1 0 0');
            groupContainer.setAttribute('animation', 'property: position; to: 1 0 0;  dur: 15000; easing: linear; dir: alternate; loop:true;');
            for(let i=0; i<2; i++){
                var cloud = document.createElement('a-entity');
                cloud.setAttribute('gltf-model', '#cloudModel');
                cloud.setAttribute('scale', '0.015 0.009 0.015');
                cloud.setAttribute('position', {x: getRandomArbitrary(-1, 1.5, 3), y: 1.7, z: -1.1});
                //groupContainer.appendChild(cloud);
            }
            
            
            
        }
        //windy
        else if(weather == 3){
            // add tornado
            weatherModel.setAttribute('src', '../ARModels/tornado/scene.gltf');
            sceneE1.appendChild(weatherModel);
            
            groupContainer.setAttribute('position', '0.8 1.5 0');
            groupContainer.setAttribute('animation', 'property: position; to: -3 -1.5 0;  dur: 5000; easing: linear; loop:true;');

            for(let i=0; i<4; i++){
                var torndao1 = document.createElement('a-entity');
                torndao1.setAttribute('gltf-model', '#weatherModel');
                torndao1.setAttribute('scale', '0.15 0.1 0.1');
                torndao1.setAttribute('position', {x: getRandomArbitrary(-0.5, 1.5, 3), y: getRandomArbitrary(1, 2, 3), z: -2});
                torndao1.setAttribute('material', 'opacity: 0; transparent: true');
                torndao1.setAttribute('animation', 'property: rotation; to: 0 1080 0; loop: true; dur: 500'); 

                var torndao2 = document.createElement('a-entity');
                torndao2.setAttribute('gltf-model', '#weatherModel');
                torndao2.setAttribute('scale', '0.15 0.1 0.1');
                torndao2.setAttribute('position', {x: getRandomArbitrary(1.7, 4, 3), y: getRandomArbitrary(2.5, 3.5, 3), z: -2});
                torndao2.setAttribute('material', 'opacity: 0; transparent: true');
                torndao2.setAttribute('animation', 'property: rotation; to: 0 1080 0; loop: true; dur: 500'); 
                groupContainer.appendChild(torndao1);
                groupContainer.appendChild(torndao2);
            }
        
        }
        
    
    }

    
})


function getRandomArbitrary(min, max, decimals) {
         return (Math.random() * (max - min) + min).toFixed(decimals);
    }
