import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "安装教程",
      link: "Install/",
      children: [
        "Install/AstrBot-Shell/",
        "Install/NTQQ-Shell/",
        "Install/AF-Proot/",
      ],
    },
  ],
});
