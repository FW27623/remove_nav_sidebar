const { BrowserWindow, ipcMain } = require("electron");

function onLoad(plugin) {
  // 监听删除按钮请求
  ipcMain.handle("betterQQNT.removeLastButton", () => {
    // 获取主窗口
    const mainWindow = BrowserWindow.getAllWindows()[0];
    const webContents = mainWindow.webContents;

    // 在主窗口的渲染进程中执行 JavaScript
    webContents.executeJavaScript(`
      // 查找所有侧边栏按钮
      const buttons = document.querySelectorAll('.tab-item.nav-item');
      // 获取最后一个按钮
      const lastButton = buttons[buttons.length - 1];
      // 从父节点中移除最后一个按钮
      lastButton.parentNode.removeChild(lastButton);
    `);
  });
}

module.exports = {
  onLoad,
};