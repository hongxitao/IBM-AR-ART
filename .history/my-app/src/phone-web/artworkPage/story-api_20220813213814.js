//story api
var story_id = 1;


AFRAME.registerComponent('story', {
    init: function () {
        let scene = document.querySelector('a-scene');
        let width = window.screen.availWidth;
        let height = window.screen.availHeight;

        scene.setAttribute("arjs", `trackingMethod: best; sourceType: webcam; debugUIEnabled: false; sourceWidth:${width};sourceHeight:${height};displayWidth:${width}; displayHeight:${height} `)
   },
   
   display: function(story_id){
    var text = document.querySelector("#top");
    console.log(text);

    if (story_id) {
        text.setAttribute("value", "lost");   
    }
    
   }

})