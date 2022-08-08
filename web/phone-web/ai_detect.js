var height;
var width;
window.onload = function(){

    width = document.documentElement.clientWidth;
    //width=390;
    console.log(width)

    
    let recognize = document.getElementById("recognize");
    
    recognize.innerHTML += '<canvas class="detecting" id="canvas" width=' + width + ' height='+ width + '></canvas>';


    let video = document.getElementById("video");
    video.style.zIndex=0;
    video.style.height=width+'px';
    video.style.width=width+'px';

    let canvas = document.getElementById("canvas");
    canvas.style.zIndex=-1;
    canvas.style.marginLeft=-width+'px';

    getMedia();

}

var img=null;
//img = document.querySelector("img");
const resultEle = document.querySelector(`.result`);
let objectDetector;
artworkDict = {
    0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '',
    10: '', 11: 'think', 12: ''
}

// let video = document.getElementById("video");
// video.style.zIndex=0;
// let canvas = document.getElementById("canvas");
// canvas.style.zIndex=-1;

function getMedia() {
    let constraints = {
        video: {
            width:width,
            height:width,
            facingMode: 'environment'
          },
        audio: true,
        
    };

    /*
    这里介绍新的方法:H5新媒体接口 navigator.mediaDevices.getUserMedia()
    这个方法会提示用户是否允许媒体输入,(媒体输入主要包括相机,视频采集设备,屏幕共享服务,麦克风,A/D转换器等)
    返回的是一个Promise对象。
    如果用户同意使用权限,则会将 MediaStream对象作为resolve()的参数传给then()
    如果用户拒绝使用权限,或者请求的媒体资源不可用,则会将 PermissionDeniedError作为reject()的参数传给catch()
    */
    let promise = navigator.mediaDevices.getUserMedia(constraints);
    promise.then(function (MediaStream) {
        video.srcObject = MediaStream;
        video.play();
    }).catch(function (PermissionDeniedError) {
        console.log(PermissionDeniedError);
    })
}

function takePhoto() {
    canvas.style.zIndex = 1;
    let ctx = canvas.getContext('2d');
    console.log(width)
    console.log(height)
    ctx.drawImage(video, 0, 0, width, width);
    img = canvas;
    
    detect();
}

/** Detect objects in image. */
async function detect() {
    
    // Load the MobilenetV2 tflite model from tfhub.
    
    resultEle.textContent = "Loading...";
    if (!objectDetector) {
        objectDetector = await tflite.loadTFLiteModel(
            "AImodel/model.tflite"
            //"http://localhost/AImodel/model.tflite"
            //"https://tfhub.dev/tensorflow/lite-model/ssd_mobilenet_v1/1/metadata/2?lite-format=tflite"
        );
    }
    
    const start = Date.now();
    let input = tf.image.resizeBilinear(tf.browser.fromPixels(img), [224, 224]);
    input = tf.cast(tf.expandDims(input), 'int32');
    
    // Run the inference and get the output tensors.
    let result = await objectDetector.predict(input);
    //result.print();
    //let r = Array.from(await result["StatefulPartitionedCall:0"].data());
    let result_array = result.arraySync()[0];
    var max = result_array[0];
    var maxIndex = 0;

    for (var i = 1; i < result_array.length; i++) {
        if (result_array[i] > max) {
            maxIndex = i;
            max = result_array[i];
        }
    }

     
    console.log(maxIndex);
    console.log(result_array);

    var detectResult = false;
    if(maxIndex === 11){
        detectResult = true;
    }


    // let max=0;
    // r.forEach(element => {
    //     max = Math.max(max, element)
    // });

    //console.log(result);
    // let boxes = Array.from(await result["TFLite_Detection_PostProcess"].data());
    // let classes = Array.from(await result["TFLite_Detection_PostProcess:1"].data())
    // let scores = Array.from(await result["TFLite_Detection_PostProcess:2"].data())
    // let n = Array.from(await result["TFLite_Detection_PostProcess:3"].data())
    const latency = Date.now() - start;
    //renderDetectionResult(boxes, classes, scores, n);
    resultEle.textContent = `Latency: ${latency}ms`;

    if(detectResult){
        jumpToArtworkPage(maxIndex);
    }
    else{
        
        setTimeout(function (){
            canvas.style.zIndex=-1;
        },1000);
        setTimeout(function (){
            alert("No artworks detected!");
        },1000);
            
    }
}

/** Render detection results. */
function renderDetectionResult(boxes, classes, scores, n) {
    const boxesContainer = document.querySelector(".boxes-container");
    boxesContainer.innerHTML = "";
    for (let i = 0; i < n; i++) {
        const boundingBox = boxes.slice(i*4, (i+1)*4);
        const name = classes[i];
        const score = scores[i];
				const y_min = Math.floor(boundingBox[0] * img.clientHeight);
        const y_max = Math.floor(boundingBox[2] * img.clientHeight);
        const x_min = Math.floor(boundingBox[1] * img.clientWidth);
        const x_max = Math.floor(boundingBox[3] * img.clientWidth);
        if (score > 0.3) {
            const boxContainer = createDetectionResultBox(
                x_min,
                y_min,
                x_max - x_min,
                y_max - y_min,
                name,
                score
            );
            boxesContainer.appendChild(boxContainer);
        } 
    }
}

/** Create a single detection result box. */
function createDetectionResultBox(left, top, width, height, name, score) {
    const container = document.createElement("div");
    container.classList.add("box-container");

    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);

    const label = document.createElement("div");
    label.classList.add("label");
    label.textContent = `${name} (${score.toFixed(2)})`;
    container.appendChild(label);

    container.style.left = `${left - 1}px`;
    container.style.top = `${top - 1}px`;
    box.style.width = `${width + 1}px`;
    box.style.height = `${height + 1}px`;

    return container;
}

document.querySelector(".btn").addEventListener("click", () => {
    detect();
});


function jumpToArtworkPage(key){
    alert("Artwork detected!")
    key = key.toString();
    artworkName = artworkDict[key];
    window.location.href = "./artworkPage/" + artworkName + ".html";

}