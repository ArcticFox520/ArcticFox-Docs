# 安装教程
## 准备

> 在Windows上面有许多可以虚拟化Linux的软件

>在这里我只列举MSYS2和WSL

---

### 根据自己电脑状态,选择适合自己电脑的软件.

| MSYS2 | WSL |
| :------: | :------: |
| `关闭` 虚拟化 | `开启` 虚拟化 |
| `或者` 内存 `小于` 4G | `并且` 内存 `大于` 8G |

---

::: details MSYS2
| MSYS2 | 下载链接 | 已加速 |
| :------: | :------: | :------: |
| `MSYS2` | [Github](https://github.com/msys2/msys2-installer/releases/download/2024-07-27/msys2-x86_64-20240727.exe) | [清华镜像](https://mirrors.tuna.tsinghua.edu.cn/msys2/distrib/x86_64/msys2-x86_64-20240727.exe)
---
- 首先,下载并使用`管理员权限`运行安装程序(`msys2-x86_64-xxx.exe`)

:::


::: details WSL
- wsl教程：
## 准备工作
 一台Windows10/Windows11系统的电脑（PC）  (这里注意**虚拟化平台**的开启,需要Windows10/11专业版)
### 开始
#### 开始前准备：
1.在电脑任务栏（或开始菜单中）搜索**启用或关闭Windows功能**

![](https://dl.img.timecdn.cn/2024/08/13/QQ_1723550668855.png)

2.打开后，将**适用于Windows的linux子系统**及**虚拟机平台**打钩

![](https://dl.img.timecdn.cn/2024/08/13/QQ_1723550712181.png)

3.点击确定，然后提示**重启计算机**，选择**马上重启**

#### 正式准备安装：
1.在系统内，打开**微软商店**

![](https://dl.img.timecdn.cn/2024/08/13/QQ_1723550749345.png)

2.然后搜索Ubuntu,选择第一个，选择**下载**

![](https://dl2.img.timecdn.cn/2024/08/13/QQ_1723550800610.png)


![](https://dl2.img.timecdn.cn/2024/08/13/QQ_1723550823311.png)


3.下载后，打开**Ubuntu**，然后等待一会，弹出以下界面：

![](https://dl.img.timecdn.cn/2024/08/13/QQ_1723551821914.md.png)

内容为：
#### Installing, this may take a few minutes...
Please create a default UNIX user account. The username does not need to match your Windows username.
For more information visit: https://aka.ms/wslusers

**Enter new UNIX username:**（用户名字）

在此输入你想命名的**名字**，按**回车**下一步；然后弹出输入密码（New password），随便输入即可。 继续回车确认密码（Retype new password:）

4.弹出以下界面：

![](https://dl2.img.timecdn.cn/2024/08/13/QQ_1723552237514.md.png)

**这里就无需管，关掉窗口**，然后打开系统的**终端管理员（或者CMD管理员运行）**，输入
```bash
Ubuntu  config --default-user root
```
默认切换至**root**用户；(界面/结果如下）

![](https://dl2.img.timecdn.cn/2024/08/13/QQ_1723552723640.md.png)

5.再次打开**Ubuntu**程序

![](https://dl3.img.timecdn.cn/2024/08/13/QQ_1723552929831.md.png)

### 开始安装脚本
在此输入
```bash
bash <(curl https://gh.arcticfox.top/https://raw.githubusercontent.com/ArcticFox520/Yunzai-Bot-Script/main/start)
```
弹出以下界面：

![](https://dl.img.timecdn.cn/2024/08/13/QQ_1723553022034.md.png)

输入**同意安装**，按回车即可进行脚本安装；

![](https://dl2.img.timecdn.cn/2024/08/13/QQ_1723553142871.md.png)

**启动脚本**命令为
```
afyz
```

:::
