# 安装教程
## 准备
| 软件 | 链接 |
| :------: | :------: |
| ZeroTermux | [ZeroTermux](https://mirrors.chenby.cn/https://github.com/hanxinhao000/ZeroTermux/releases/download/release/ZeroTermux-0.118.1.40.apk) |
| MT管理器 | [MT管理器](https://pan.mt2.cn/mt/MT2.16.4.apk) |
---
## 开始
- 首先 安装并打开 `ZeroTermux`

- 更换`ZeroTermux`默认软件源
```bash
sed -i 's|packages.termux.org|mirrors.bfsu.edu.cn/termux|g' $PREFIX/etc/apt/sources.list
```
- 更新`软件源`和`软件包`
```bash
apt update -y && apt upgrade -y
```
- 安装`cURL`软件
```bash
apt install -y curl
```
- 安装`Proot容器`和`ArcticFox Script`
```bash
bash -c "$(curl -L https://raw.githubusercontent.com/ArcticFox520/Yunzai-Bot-Script/main/Proot/Ubuntu)"
```