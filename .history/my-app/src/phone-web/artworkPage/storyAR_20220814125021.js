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
        text.setAttribute("value", "story_0");   
    }

    //artwork_1
    if (artwork_id == 1) {
        text.setAttribute("value", "story_1");   
    }

    //artwork_2
    if (artwork_id == 2) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_3
    if (artwork_id == 3) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_4
    if (artwork_id == 4) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_5
    if (artwork_id == 5) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_6
    if (artwork_id == 6) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_7
    if (artwork_id == 7) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_8
    if (artwork_id == 8) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_9
    if (artwork_id == 9) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_10
    if (artwork_id == 10) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_11
    if (artwork_id == 11) {
        text.setAttribute("value", "story_0");   
    }

    //artwork_12
    if (artwork_id == 12) {
        text.setAttribute("value", "story_0");   
    }

   }

})