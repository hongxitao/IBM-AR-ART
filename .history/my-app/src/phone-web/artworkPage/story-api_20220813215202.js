


//weather api
navigator.geolocation.getCurrentPosition(
    function(position){
        
        var story = document.querySelector('[story]');
        console.log(story);
        // story.display(1);
      
    },
    function(error){
      alert("Request Failure! "+error.code+" , "+error.message);
    },
);