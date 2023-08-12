# remove_nav_sidebar
### 删除QQNT版本左边导航栏的按钮

**2023年08月11日，QQ最新版本（QQ9.9.2.15962）增加了侧边栏管理的选项，我想如果后续不再增加一些非常讨厌而且无法控制的侧边栏的话，这个插件就可以退休了😆。**

目前写的比较简陋，主要功能就是移除侧边栏按钮，不过能用就行。可以看代码自行更改，代码都写了较为详尽的注释。

### 使用方法（2023年7月16日重命名）
- `git clone`或下载zip文件解压，将文件夹移动至`LiteLoaderQQNT数据目录/plugins/`目录下。
- 打开`renderer.js`,然后修改`const removeIndexes = [3,4,5,6];`的内容，具体可看代码注释，里面写的非常清楚。
- 重启QQNT或者打开[Chii DevTools的控制台](https://github.com/mo-jinran/chii-devtools)然后按下 `Ctrl+R` 刷新一下即可生效

![效果图](./res/example.png)

P.S. 由于本项目的特殊性，必要时会删库跑路😂

## 开源协议

[MIT License](./LICENSE)  
Copyright (c) 2023 FW27623
