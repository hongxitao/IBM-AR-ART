//story api
navigator.geolocation.getCurrentPosition(
    function(){
        
        var story = document.querySelector('[story]').components.story;
        console.log(story);
        story.display(1);
      
    },
    function(error){
      alert("Request Failure! "+error.code+" , "+error.message);
    },
);