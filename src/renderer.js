export function onLoad() {
  // 定时器，用于检查按钮是否加载完成
  const interval = setInterval(() => {
    // 查找侧边栏按钮
    const buttons = document.querySelectorAll("div.nav-item");
    if (buttons.length > 3) {
      clearInterval(interval);
      // 定义要删除的按钮的索引数组
      //0：聊天 1：好友界面 2：QQ空间 3：频道 4：小世界 5：QQ游戏中心 6：腾讯文档
      //以上按你实际按钮为准，比如要删除频道，小世界，QQ游戏中心和腾讯文档就输入[3,4,5,6]
      //中间以英文状态下的逗号隔开
      const removeIndexes = [3,4,5,6];
      // 遍历索引数组并删除指定的按钮
      removeIndexes.forEach((index) => {
        const button = buttons[index];
        button.parentNode.removeChild(button);
      });
    }
  }, 100);
}
