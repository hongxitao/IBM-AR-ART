//story api
navigator.geolocation.getCurrentPosition(
    function(){
      // get param from url
      function Request(strName){
        var strHref = location.href;
        var intPos = strHref.indexOf("?");
        var strRight = strHref.substring(intPos + 1);
        var arrTmp = strRight.split("&");
        for(var i = 0; i < arrTmp.length; i++) {
            var arrTemp = arrTmp[i].split("=");
            if(arrTemp[0].toUpperCase() === strName.toUpperCase()) return arrTemp[1];
        }
        return "";
    }
    var param1=Request("artworkID");
    //var param2=Request("param2");
    console.log(param1)
        
        var story = document.querySelector('[story]').components.story;
        console.log(story);
        story.display(1);
      
    },
    function(error){
      alert("Request Failure! "+error.code+" , "+error.message);
    },
);