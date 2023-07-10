// status fields and start button in UI
var phraseDiv;
var resultDiv;
var startSpeakTextAsyncButton;

// subscription key and region for speech services.
var subscriptionKey, serviceRegion;
var SpeechSDK;
var synthesizer;

document.addEventListener("DOMContentLoaded", function () {
    startSpeakTextAsyncButton = document.getElementById("startSpeakTextAsyncButton");
    subscriptionKey = '45cb9a57da754a6d9479aeb5c673b0a6'
    serviceRegion = 'eastus'
    phraseDiv = document.getElementById("phraseDiv");
    resultDiv = document.getElementById("resultDiv");

    startSpeakTextAsyncButton.addEventListener("click", function () {
        startSpeakTextAsyncButton.disabled = true;
        //phraseDiv.value = "";

        if (subscriptionKey === "" || subscriptionKey === "subscription") {
            alert("Please enter your Microsoft Cognitive Services Speech subscription key!");
            startSpeakTextAsyncButton.disabled = false;
            return;
        }
        var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
        speechConfig.speechSynthesisVoiceName = "es-MX-RenataNeural";
        synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);

        let inputText = phraseDiv.value;
        synthesizer.speakTextAsync(
            inputText,
            function (result) {
                startSpeakTextAsyncButton.disabled = false;
                if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
                    resultDiv.value += "synthesis finished for [" + inputText + "].\n";
                } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
                    resultDiv.value += "synthesis failed. Error detail: " + result.errorDetails + "\n";
                }
                window.console.log(result);
                synthesizer.close();
                synthesizer = undefined;
            },
            function (err) {
                startSpeakTextAsyncButton.disabled = false;
                resultDiv.value += "Error: ";
                resultDiv.value += err;
                resultDiv.value += "\n";
                window.console.log(err);

                synthesizer.close();
                synthesizer = undefined;
            });
    });

    if (!!window.SpeechSDK) {
        SpeechSDK = window.SpeechSDK;
        startSpeakTextAsyncButton.disabled = false;

        document.getElementById('content').style.display = 'block';
        document.getElementById('warning').style.display = 'none';

        // in case we have a function for getting an authorization token, call it.
        if (typeof RequestAuthorizationToken === "function") {
            RequestAuthorizationToken();
        }
    }
});