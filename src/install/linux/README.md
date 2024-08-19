# Linux 安装教程
### 准备
一台运行`Linux`的设备

> 有无桌面环境均无影响

- [X] Ubuntu

- [X] Debian

- [X] Arch Linux

- [X] CentOS Stream

### 开始
1. 首先在Linux系统内更新软件源及安装git:

::: details Ubuntu

> 更新软件源

```bash
apt -y update
```

> 安装git

```
apt install -y git
```
:::

::: details Debian
> 更新软件源

```bash
apt -y update
```

> 安装git

```
apt install -y git
```
:::

::: details Arch Linux
> 更新软件源

```bash
pacman -Sy
```

> 安装git

```
pacman -S --noconfirm --needed git
```
:::

::: details CentOS Stream
> 更新软件源

```bash
dnf -y update
```

> 安装git

```
dnf install -y
```
:::

2. 然后拉取脚本: 
```bash
git clone --depth=1 https://github.com/ArcticFox520/Yunzai-Next-Script
```
