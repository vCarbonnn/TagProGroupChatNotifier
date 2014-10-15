// ==UserScript==
// @name          TagPro Group Chat Notifier
// @description   Notifies you if your name is called in TagPro Group Chat.
// @author        Carbon
// @version       1.5
// @namespace     http://www.reddit.com/user/vCarbonnn/
// @include       http://tagpro-*.koalabeast.com/groups/*
// @include       http://tangent.jukejuice.com/groups/*
// @include       http://maptest.newcompte.fr/groups/*
// ==/UserScript==

//** editable variables **//
customRequestTerm = false; //If you want to change the default request term (your tagpro name), change this to true, and proceed to change the requestTerm below
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
document.getElementById("chat").style.color = groupChatColour;
document.getElementById("chatSend").style.color = groupChatInputBoxColour;
chatLength = 0;


function chatBot() {
    if(!customRequestTerm) {
        mainText = $('.you:eq(0)').html();
        indexFound = 0;
        notFound = true;
        i = 0;
        while(notFound) {
            if(mainText[i] == "<") {
                indexFound = i;
                notFound = false;
            }
            i++;
        }

        conCat = "";
        for(j=0; j<indexFound; j++) {
            conCat = conCat + mainText[j];
        }
        requestTerm = conCat.toLowerCase();   
    }
    else {
        requestTerm = requestTerm.toLowerCase();
    }


    newChatLength = $('#chat>div').length;
    if ( newChatLength > chatLength ) {
        lastText = $('#chat>div').last()[0].innerText;
        //lastText = lastText.substring(0,(requestTerm.length)); //Used if you want a notification when anyone says your name without an exclamation mark - remove "!"+ in the line below too
        if ( lastText.toLowerCase().search("!"+requestTerm) >= 0 ) {
            if(soundEnabled) {
                sound.play();
            }  
            document.title = customRequestedTabTitle;
            if (document.getElementById("chatSend").value === "") {
                document.getElementById("chatSend").value = " ";
            }
        }
    }
    
    chatLength = newChatLength;

    setInterval(function checkSeen() {
        if (document.getElementById("chatSend").value === "") {
            document.title = "TagPro Group";
        }
    }, 3000);
}

setInterval(chatBot, 500);
