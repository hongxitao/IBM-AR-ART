AFRAME.registerComponent('playground', {
    /**
     * Code within this function will be called when everything in <a-scene> is ready and loaded.
     */
    init: function () {

    },
    addItem: function (string) {
        // Add code here!
        var sceneE1 = document.querySelector('a-scene')

        if (typeof(string)=='string') {
            var rainmodel = document.createElement('a-asset-item')
            rainmodel.setAttribute('id', 'rain')
            rainmodel.setAttribute('src', '/model_asset/rain/scene.gltf')

            var racetrack = document.createElement('a-asset-item')
            racetrack.setAttribute('id', 'racetrack')
            racetrack.setAttribute('src', '/model_asset/race_track/track.gltf')
            sceneE1.appendChild(racetrack)
            sceneE1.appendChild(rainmodel)


            //   <a-entity gltf-model="model_asset/rain/scene.gltf" position="-0.252 0.137 -0.049" scale="0.001 0.001 0.001"
            //               animation-mixer="clip:Take 001; loop:infinite"></a-entity>
            for (var i = 0; i < 8; i++) {
                var model = document.createElement('a-entity');
                model.setAttribute('gltf-model', '#rain')
                model.setAttribute("animation-mixer", "clip:Take 001; loop:infinite")
                model.setAttribute('position',
                    {
                        x: getRandomArbitrary(-200, 200),
                        y: -100,//getRandomArbitrary(-1500,1500),
                        z: getRandomArbitrary(-200, 200)
                    });
                model.setAttribute('scale', {x: 0.3, y: 0.3, z: 0.3});
                //model.setAttribute('animation', 'dur:5000; from: 0 0 0; to 30000 30000 30000; loop:-1; property:position')
                const weather_animation_attributes = {
                    property: 'position',
                    to: '0 0 0',
                    loop: true,
                    dur: '15000'
                }
                model.setAttribute('animation', weather_animation_attributes)
                sceneE1.appendChild(model);
            }

            var race_track_model = document.createElement('a-entity')
            race_track_model.setAttribute("gltf-model", '#racetrack')
            race_track_model.setAttribute('position',
                {x: 0, y: 0, z: -2});
            race_track_model.setAttribute('scale', {x: 1, y: 1, z: 1});
            race_track_model.setAttribute('rotation', {x: -90, y: 0, z: 0})
            sceneE1.appendChild(race_track_model)

            // var plane = sceneE1.querySelector("#plane")
            // console.log(plane)
            var animation = document.createElement('a-animation')
            // const animation_attributes = {
            //   property : 'rotation',
            //   to : '0 360 0',
            //   loop: true,
            //   dur: '5000'
            // }
            // //setAttributes(animation, animation_attributes)
            // // animation.setAttribute('property', 'rotation')
            // // animation.setAttribute('to', '0 360 0')
            // // animation.setAttribute('loop', '1')
            // // animation.setAttribute('dur', '5000')
            // //plane.appendChild(animation)
            // plane.setAttribute('animation', animation_attributes)
            // getWeather();
            // },

            // tick: function() {
            //     console.log("hello")
            // }
            // });

            function getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            }

            function setAttributes(element, attributes) {
                Object.keys(attributes).forEach(attr => {
                    element.setAttribute(attr, attributes[attr]);
                });
            }
        }
    }
})