AFRAME.registerComponent('story', {
    init: function () {
        let scene = document.querySelector('a-scene');
        let width = window.screen.availWidth;
        let height = window.screen.availHeight;

        scene.setAttribute("arjs", `trackingMethod: best; sourceType: webcam; debugUIEnabled: false; sourceWidth:${width};sourceHeight:${height};displayWidth:${width}; displayHeight:${height} `)
   },
   
   display: function(artwork_id){
    var text = document.querySelector("#top");
    console.log(text);

    //artwork_0
    if (artwork_id == 0) {
        text.setAttribute("value", "story_1");   
    }

   }

})