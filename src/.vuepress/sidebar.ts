import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/install/": [
    {
      text: "Windows",
      link: "/install/windows/",
    },
    {
      text: "Linux",
      link: "/install/linux/",
    },
    {
      text: "Android",
      link: "/install/android/",
    },
  ],
});
