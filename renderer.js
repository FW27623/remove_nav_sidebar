export function onLoad() {
  // 定时器，用于检查按钮是否加载完成
  const interval = setInterval(() => {
    // 查找侧边栏按钮
    const buttons = document.querySelectorAll(".tab-item.nav-item");
    if (buttons.length > 0) {
      clearInterval(interval);
      // 获取最后一个按钮
      const lastButton = buttons[buttons.length - 1];
      // 从父节点中移除最后一个按钮
      lastButton.parentNode.removeChild(lastButton);
    }
  }, 100);
}