# 安装教程

## 准备
| 软件 | 链接 | 加速 |
| :------: | :------: | :------: |
| ZeroTermux | [Termux](https://github.com/termux/termux-app/releases/download/v0.118.1/termux-app_v0.118.1+github-debug_arm64-v8a.apk) | [ghproxy](https://gh.arcticfox.top/https://github.com/termux/termux-app/releases/download/v0.118.1/termux-app_v0.118.1+github-debug_arm64-v8a.apk) |
| MT管理器 | [MT管理器](https://pan.mt2.cn/mt/MT2.16.4.apk) |
---
## 开始
- 首先 安装并打开 `Termux`

- 安装`Proot容器`和`ArcticFox Script`
```bash
bash -c "$(curl -L https://raw.githubusercontent.com/ArcticFox520/Yunzai-Script/main/Proot/Ubuntu)"
```

::: details 无法正常运行? 看这里
- 安装`Proot容器`和`ArcticFox Script`
- 使用下面的命令重新安装
```
# 注意: 此命令没有任何返回
rm -rf $HOME/AF-Proot
```
```bash
bash -c "$(curl -L https://mirrors.chenby.cn/https://raw.githubusercontent.com/ArcticFox520/Yunzai-Script/main/Proot/Ubuntu)"
```
:::