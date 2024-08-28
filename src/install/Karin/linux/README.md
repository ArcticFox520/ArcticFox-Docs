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

> 安装cURL

```
apt install -y curl
```
:::

::: details Debian
> 更新软件源

```bash
apt -y update
```

> 安装cURL

```
apt install -y curl
```
:::

::: details Arch Linux
> 更新软件源

```bash
pacman -Sy
```

> 安装cURL

```
pacman -S --noconfirm --needed curl
```
:::

::: details CentOS Stream
> 更新软件源

```bash
dnf -y update
```

> 安装cURL

```
dnf install -y curl
```
:::

2. 然后执行安装脚本: 
```bash
bash <(curl https://raw.githubusercontent.com/ArcticFox520/Yunzai-Bot-Script/main/start)
```
