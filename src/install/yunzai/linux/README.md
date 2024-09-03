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
apt install -y git
```
:::

::: details Debian
> 更新软件源

```bash
apt -y update
```

> 安装cURL

```
apt install -y git
```
:::

::: details Arch Linux
> 更新软件源

```bash
pacman -Sy
```

> 安装cURL

```
pacman -S --noconfirm --needed git
```
:::

::: details CentOS Stream
> 更新软件源

```bash
dnf -y update
```

> 安装cURL

```
dnf install -y git
```
:::

2. 克隆仓库: 
```bash
git clone --depth=1 https://github.com/ArcticFox520/Yunzai-Script
```

::: details 无法正常运行? 看这里
- 使用下面的命令重新安装
```
# 注意: 此命令没有任何返回
rm -rf Yunzai-Script
```
```bash
git clone --depth=1 https://mirror.ghproxy.com/https://github.com/ArcticFox520/Yunzai-Script
```
:::

3. 运行安装脚本:
```bash
cd Yunzai-Script
bash install
```

> 注意: 请严格安装上述给出命令执行,特别是第三条.
