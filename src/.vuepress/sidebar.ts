import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/install": [
    {
      text: "Windows",
      icon: "fa-brands fa-windows",
      prefix: "",
      link: "/install/windows/",
      children: "structure",
    },
    {
      text: "Linux",
      icon: "fa-brands fa-linux",
      link: "/install/linux/",
      children: "structure",
    },
    {
      text: "Android",
      icon: "fa-brands fa-android",
      link: "/install/android/",
      children: "structure",
    },
  ],
});
