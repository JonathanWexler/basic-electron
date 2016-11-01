let app = require('electron').app
let BrowserWindow = require('electron').BrowserWindow
let window;

app.on('ready', function (argument) {
  let window = new BrowserWindow({width: 600, height: 600});

    window.loadURL('http://jonwexler.com');
})