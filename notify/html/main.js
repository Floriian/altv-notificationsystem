function noticska(_text, _type, _time, _layout)
{
    new Noty({
        theme: 'sunset',
        text: _text,
        type: _type,
        timeout: _time,
        layout: _layout,
        progressBar: true
        
    }).show();
}

if('alt' in window) {
    alt.on('xpert:notification:sendToWebview', (text, type, time, layout) => noticska(text, type, time, layout));
}