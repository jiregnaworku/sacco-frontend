const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
  console.log('Creating Electron window...')
  
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    show: false,
  })

  win.once('ready-to-show', () => {
    console.log('Window ready to show')
    win.show()
  })

  win.on('closed', () => {
    console.log('Window closed')
  })

  const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged
  console.log('Is development mode:', isDev)

  if (isDev) {
    console.log('Loading development URL: http://localhost:5173')
    win.loadURL('http://localhost:5173').catch((error) => {
      console.error('Failed to load development URL:', error)
    })
    win.webContents.openDevTools()
  } else {
    console.log('Loading production build:', path.join(__dirname, 'dist/index.html'))
    win.loadFile(path.join(__dirname, 'dist/index.html')).catch((error) => {
      console.error('Failed to load production build:', error)
    })
  }

  win.webContents.setWindowOpenHandler(({ url }) => {
    require('electron').shell.openExternal(url)
    return { action: 'deny' }
  })

  return win
}

app.whenReady().then(() => {
  console.log('App is ready, creating window...')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  console.log('All windows closed')
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
