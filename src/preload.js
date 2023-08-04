const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("removeLastButton", () => ipcRenderer.invoke("LiteLoader.removeLastButton"));