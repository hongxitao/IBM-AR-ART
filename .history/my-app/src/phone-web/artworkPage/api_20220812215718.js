//weather api
navigator.geolocation.getCurrentPosition(
    function(position){
      console.log(position);
      let longitude = position.coords.longitude;
      let latitude = position.coords.latitude;
      // let btn =  document.querySelector("button");

      // //点击按钮发起Ajax请求，传送geocode
      // btn.onclick = function(){

      //   let xhr = new XMLHttpRequest();

      //   xhr.open("get","http://localhost:3001/api?longitude="+longitude+"&latitude="+latitude);

      //   xhr.send();

      //   xhr.onload = function(){
      //     console.log(xhr.responseText);
      //     var component = document.querySelector('[playground]').components.playground;
      //     console.log(component);
      //     component.addItem(xhr.responseText);
      //   }
      // }
      let xhr = new XMLHttpRequest();

        xhr.open("get","http://localhost:3001/api?longitude="+longitude+"&latitude="+latitude);

        xhr.send();

        xhr.onload = function(){
          console.log(xhr.responseText);
          //wait weather scene finish initialise
          document.querySelector('[weather]').addEventListener('loaded', function () {
            var component = document.querySelector('[weather]').components.weather;
             //display(artworkName, weather( 0 for cloudy, 1 for snow, 2 for sunny, ..windy, .. rainy))
             component.display('asfaf', xhr.responseText);
  })
          // var component = document.querySelector('[weather]').components.weather;
          // console.log(component);
          // component.display('racecar', xhr.responseText);
        }
    },
    function(error){
      alert("Request Failure! "+error.code+" , "+error.message);
    },
);