function start(){
    window.watsonAssistantChatOptions = {
        integrationID: "474ccce9-be3b-4a4a-80c7-41d83fa840de", // The ID of this integration.
        region: "eu-gb", // The region your integration is hosted in.
        serviceInstanceID: "072a7f17-84a8-4fa4-938e-3e6ef0bf3272", // The ID of your service instance.
        onLoad: function(instance) { instance.render(); }
    };
    setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
    });
}


