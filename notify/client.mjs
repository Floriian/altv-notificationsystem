/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />

import * as alt from 'alt-client';
import * as native from 'natives';

let notifyView;
var notifyCount = 0;

alt.onServer("xpert:notification:send", (text, type, time, layout) => {
    notifyCount++;
    if(notifyView == null) 
    { 
        notifyView = new alt.WebView('http://resource/notify/html/index.html'); 
        notifyView.on('load', () => {
            notifyView.emit('xpert:notification:sendToWebview', text, type, time, layout);
        });
    }
    else {
        notifyView.emit('xpert:notification:sendToWebview', text, type, time, layout);
        console.log("ELSE");
    }
});
