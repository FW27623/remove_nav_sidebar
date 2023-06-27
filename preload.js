const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("removeLastButton", () => ipcRenderer.invoke("betterQQNT.removeLastButton"));