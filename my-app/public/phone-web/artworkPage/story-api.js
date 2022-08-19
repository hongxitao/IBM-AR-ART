//story api
navigator.geolocation.getCurrentPosition(
    function(){

      var story = document.querySelector('[story]').components.story;
      console.log(story);

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

    var artworkID=Request("artworkID");
    console.log(artworkID)
        
    story.display(artworkID);
      
    },
    function(error){
      alert("Request Failure! "+error.code+" , "+error.message);
    },
);