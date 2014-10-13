// ==UserScript==
// @name          TagPro Group Chat Notifier
// @description   Notifies you if your name is called in TagPro Group Chat.
// @author        Carbon
// @version       1.0
// @namespace     http://www.reddit.com/user/vCarbonnn/
// @include       http://tagpro-*.koalabeast.com/groups/*
// @include       http://tangent.jukejuice.com/groups/*
// @include       http://maptest.newcompte.fr/groups/*
// ==/UserScript==

//** editable variables **//
requestTerm = "yourName"; //This will change the text required for you to be alerted.

groupChatColour = "white"; //This will change the text colour of all chat in the group. General colours or a specific hex code (e.g: #33CCCC) can be used.
groupChatInputBoxColour = "white"; //This will change the text colour of the input box. General colours or a specific hex code (e.g: #33CCCC) can be used.

customRequestedTabTitle = "*REQUESTED*"; //This will change the text that will appear in the tab's name when you are requested - Default should be fine.
soundEnabled = true; //Change to false if you want the sound to be disabled.
soundFileURL = 'http://www.freesound.org/data/previews/200/200813_2585050-lq.mp3'; //This is the sound which is played when you are requested.
//** ** ** ** ** ** ** **//



$('#chat').before( "<audio id='sound' style='display: none;'></audio>" );
sound = document.getElementById('sound');
sound.src = soundFileURL;
chatLength = 0;

function chatBot() {
    document.getElementById("chat").style.color = groupChatColour;
    document.getElementById("chatSend").style.color = groupChatInputBoxColour;
    
    newChatLength = $('#chat>div').length;
    if ( newChatLength > chatLength ) {
        if ( $('#chat>div').last()[0].innerText.toLowerCase().search("!"+requestTerm) >= 0 ) {
            if(soundEnabled) {
                sound.play();
            }  
            document.title = customRequestedTabTitle;
            if (document.getElementById("chatSend").value == "") {
                document.getElementById("chatSend").value = " ";
            }
        }
    }
    
    chatLength = newChatLength;

    setInterval(function checkSeen() {
        if (document.getElementById("chatSend").value == "") {
            document.title = "TagPro Group";
            document.getElementById("chatSend").style.color = "white";
        }
    }, 3000);
}

setInterval(chatBot, 500);
