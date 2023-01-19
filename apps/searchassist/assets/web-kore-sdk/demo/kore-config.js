(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptions = {};
    botOptions.logLevel = 'debug';
    botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
    botOptions.koreSpeechAPIUrl = "";//deprecated
    //botOptions.bearer = "bearer xyz-------------------";
    //botOptions.ttsSocketUrl = '';//deprecated
    botOptions.koreAnonymousFn = koreAnonymousFn;
    botOptions.recorderWorkerPath = '../libs/recorderWorker.js';

    botOptions.JWTUrl = "https://mk2r2rmj21.execute-api.us-east-1.amazonaws.com/dev/users/sts";
    botOptions.userIdentity = 'rajasekhar.balla@kore.com';// Provide users email id here
    botOptions.botInfo = { name: "SDKBot", "_id": "st-b9889c46-218c-58f7-838f-73ae9203488c" }; // bot name is case sensitive
        botOptions.clientId = "cs-1e845b00-81ad-5757-a1e7-d0f6fea227e9";
        botOptions.clientSecret = "5OcBSQtH/k6Q/S6A3bseYfOee02YjjLLTNoT1qZDBso=";
    
    var chatConfig={
        botOptions:botOptions,
        allowIframe: false, 			// set true, opens authentication links in popup window, default value is "false"
        isSendButton: false, 			// set true, to show send button below the compose bar
        isTTSEnabled: false,			// set true, to hide speaker icon
        isSpeechEnabled: false,			// set true, to hide mic icon
        allowGoogleSpeech: true,		// set true, to use Google speech engine instead KORE.AI engine.This feature requires valid Google speech API key. (Place it in 'web-kore-sdk/libs/speech/key.js')
        allowLocation: true,			// set false, to deny sending location to server
        loadHistory: true,				// set true to load recent chat history
        messageHistoryLimit: 10,		// set limit to load recent chat history
        autoEnableSpeechAndTTS: false, 	// set true, to use talkType voice keyboard.
        graphLib: "d3" ,				// set google, to render google charts.This feature requires loader.js file which is available in google charts documentation.
        googleMapsAPIKey:"",
        minimizeMode:false,
        pickersConfig:{
            showDatePickerIcon:false,      // set true, to show datePicker icon
            showDateRangePickerIcon:false, // set true, to show dateRangePicker icon
            showClockPickerIcon:false,     // set true, to show clockPicker icon
            showTaskMenuPickerIcon:false,  // set true, to show taskMenu icon
            showradioOptionMenuPickerIcon:false  // set true, to show radioOption icon
        }             // set true, to show chatwindow in minized mode 
    };
     /* 
        allowGoogleSpeech will use Google cloud service api.
        Google speech key is required for all browsers except chrome.
        On Windows 10, Microsoft Edge will support speech recognization.
     */

    KoreSDK.chatConfig=chatConfig
})(window.KoreSDK);