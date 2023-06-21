const { app, BrowserWindow,ipcMain  } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    icon:__dirname + '/favicon.ico',
    autoHideMenuBar: true,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration : true,
      contextIsolation : false,
      preload: path.join(__dirname, 'preload.js')
  }
})
  win.webContents.openDevTools()
  win.loadFile(path.join(__dirname, 'index.html'))
}


app.whenReady().then(() => {
  createWindow()
})



app.on('window-all-closed', () => {
  //Selain macc os perlu memanggil method quit untuk benar benar close aplikasi
  if (process.platform !== 'darwin') {
    app.quit()
  }
})