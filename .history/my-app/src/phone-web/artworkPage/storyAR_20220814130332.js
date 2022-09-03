AFRAME.registerComponent('story', {
    init: function () {
        let scene = document.querySelector('a-scene');
        let width = window.screen.availWidth;
        let height = window.screen.availHeight;

        scene.setAttribute("arjs", `trackingMethod: best; sourceType: webcam; debugUIEnabled: false; sourceWidth:${width};sourceHeight:${height};displayWidth:${width}; displayHeight:${height} `)
   },
   
   display: function(artwork_id){
    var title = document.querySelector("#title");
    var description = document.querySelector("#description");
    console.log(text);

    //artwork_0
    if (artwork_id == 0) {
        title.setAttribute("value", "Rebooking Without the turbulence");  
        description.setAttribute ("value", "Customers need flexibility when rebooking cancelled flights. Using the IBM Garage method, American Airlines quickly launched a dynamic new app, enabling customer service to soar to new heights.");  
    }

    //artwork_1
    if (artwork_id == 1) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_2
    if (artwork_id == 2) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_3
    if (artwork_id == 3) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_4
    if (artwork_id == 4) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_5
    if (artwork_id == 5) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_6
    if (artwork_id == 6) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");     
    }

    //artwork_7
    if (artwork_id == 7) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_8
    if (artwork_id == 8) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_9
    if (artwork_id == 9) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_10
    if (artwork_id == 10) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_11
    if (artwork_id == 11) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

    //artwork_12
    if (artwork_id == 12) {
        title.setAttribute("value", "story_0");  
        description.setAttribute ("value", "story_0");  
    }

   }

})