//weather api
navigator.geolocation.getCurrentPosition(
    function(position){
      console.log(position);

      let longitude = -0.11623379793970794//position.coords.longitude;
      let latitude = 51.503484664249186//position.coords.latitude;
      //51.503484664249186, -0.11623379793970794
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
        //console.log("geeee")
        xhr.open("get","http://localhost:3300/api?longitude="+longitude+"&latitude="+latitude);

        xhr.send();

        xhr.onload = function(){
        //console.log(xhr.responseText);
          
        var component = document.querySelector('[weather]').components.weather;
        //console.log(component);
        console.log(xhr.responseText);
        console.log(document.title);
        component.display(document.title, xhr.responseText);
             
        // var component = document.querySelector('[weather]').components.weather;
        // console.log(component);
        // component.display('racecar', 'Rain');
        }
    },
    function(error){
      alert("Request Failure! "+error.code+" , "+error.message);
    },
);