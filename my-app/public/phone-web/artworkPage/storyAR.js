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

    //artwork_0
    if (artwork_id == 0) {
        title.setAttribute("value", "Rebooking Without the turbulence");  
        description.setAttribute ("value", "Customers need flexibility when rebooking cancelled flights. Using the IBM Garage method, American Airlines quickly launched a dynamic new app, enabling customer service to soar to new heights.");  
    }

    //artwork_1
    if (artwork_id == 1) {
        title.setAttribute("value", "Farming with deep roots");  
        description.setAttribute ("value", "Analysis of water and soil in agriculture is critical but expensive and time-consuming. Using AI, the AgroPad app, enables farmers to get real-time, on-location analysis of samples, revolutionising digital agriculture and environmental testing.");  
    }

    //artwork_2
    if (artwork_id == 2) {
        title.setAttribute("value", "Brilliant customer service with AI");  
        description.setAttribute ("value", "AI is transforming the customer experience, making it quicker for customers to access support. Natwest's chatbot Cora has become the bank's super hero by freeing up employees to assist customers with critical needs.");  
    }

    //artwork_3
    if (artwork_id == 3) {
        title.setAttribute("value", "Charging batteries for change");  
        description.setAttribute ("value", "Daimler-Benz is crafting the future of electric vehicles by designing better batteries. They're using IBM Quantum technology to research how to double or quadruple battery performance for a more sustainable future.");  
    }

    //artwork_4
    if (artwork_id == 4) {
        title.setAttribute("value", "Moving content Not people");  
        description.setAttribute ("value", "FOX Sports delivered the best FIFA World Cup from Russia to their US audience in high-quality and near real time. What makes this exceptional? The production team leveraged their state-of-the-art Los Angeles facility avoiding the usual huge deployment of staff and equipment.");  
    }

    //artwork_5
    if (artwork_id == 5) {
        title.setAttribute("value", "Keep moving Smoothly and Safely");  
        description.setAttribute ("value", "KONE uses IBM Cloud and Watson IoT? to service hundreds of thousands of escalators and elevators worldwide. Maintenance crews have more detailed information to fix problems before they happen, ensuring happy customers.");  
    }

    //artwork_6
    if (artwork_id == 6) {
        title.setAttribute("value", "Moving fuel with maritime math");  
        description.setAttribute ("value", "ExxonMobil strives to solve complex energy challenges that will improve air quality and reduce carbon intensity. They're using IBM Quantum to identify the best routes to transport critical fuel supplies across the oceans.");     
    }

    //artwork_7
    if (artwork_id == 7) {
        title.setAttribute("value", "Using data with clinical trials");  
        description.setAttribute ("value", "During the NHS DigiTrials, IBM helped identify suitable patients for clinical trials faster —enabling quicker and safer testing of new medicines, reducing the cost and complexity of developing new treatments.");  
    }

    //artwork_8
    if (artwork_id == 8) {
        title.setAttribute("value", "Moving freight trains without disruption");  
        description.setAttribute ("value", "BNSF Railway is reducing derailments and incidents using real-time data from IoT sensors on trains and along tracks. Using IBM Cloud and AI technologies, they're running one of North America's largest railroads safely and efficiently.");  
    }

    //artwork_9
    if (artwork_id == 9) {
        title.setAttribute("value", "Keeping salmon healthy with AI");  
        description.setAttribute ("value", "Sea lice are the biggest threat to Norway's valuable salmon farming industry. The Seafood Innovation Cluster worked with IBM to build AquaCloud, a predictive analytics platform that gathers data on fish health and warns of outbreaks.");  
    }

    //artwork_10
    if (artwork_id == 10) {
        title.setAttribute("value", "Agile development at business speed");  
        description.setAttribute ("value", "Implementing an IBM Cloud platform gave Walmart developers on-demand access to development resources in seconds, not days. Adopting an agile methodology allows them to decrease time to market for new services too.");  
    }

    //artwork_11
    if (artwork_id == 11) {
        title.setAttribute("value", "Answering the call to protect our heroes");  
        description.setAttribute ("value", "Prometeo is a platform that protects the health of firefighters using IoT devices, IBM Cloud and Watson to track smoke and toxin exposure before their health is compromised. Winner of the Call for Code Challenge.");  
    }

   }

})