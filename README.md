TagProGroupChatNotifier
=======================

This userscript notifies you if your name is called in TagPro Group Chat.

To use this userscript, make sure Tampermonkey (or equivalent) is installed.
Then press the 'raw' button, which will take you to a Tampermonkey (or equivalent) page with a button to install which you can press.

If you want a custom request name, read the next section 'Custom Request Name'. If not, the script will use the TagPro name which you enter the group with. Skip ahead to the section 'Custom Colours'.


===
Custom Request Name
===
Navigate to the Tampermonkey dashboard and select the userscript 'TagPro Group Chat Notifier'.
If you don't know how to do this, follow this:

\1. Press the icon in the top right of your browser (the one that looks like an upside down cassette) and press Dashboard: http://i.imgur.com/9An5bHZ.png

 \1a. If it doesn't, click the settings (those three lines), then go to Tools > More Tools > Extensions and make sure the checkbox next to enabled is checked

\2. Pick the 'TagPro Group Chat Notifier' userscript to edit it.

===
Now look at the small bit of code after where you see '// ==/UserScript=='.
The two variables need to be changed, which are:
* customRequestTerm - change this to true for a custom request term
* requestTerm - change this to your custom term, for example "vCarbonnn"

If you want to change the colours of your chat, read the next section 'Custom Colours', otherwise head to the 'Saving Changes' section.

===
Custom Colours
===
To change the colours of the text and your input box text, change the clearly outlined variables groupChatColour and groupChatInputBoxColour. General colours such as "blue" can be used, or a specific hex code (e.g: #33CCCC).

Now read the next section, 'Saving Changes'.

===
Saving Changes
===
To save any changes you may have made, press the 'save' button near the top left of your Tampermonkey screen, be careful that you DO NOT press the 'save to disk' button. Only press the button circled here: imgur';;

Once you have pressed the save button, another screen may appear, with a prominent 'Modify' button. Press this button. The changes have now been submitted.

For changes to take effect in a current TagPro group, you must refresh (F5).

