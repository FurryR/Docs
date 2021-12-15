const { path } = require("@vuepress/utils");

module.exports = {
  lang: "zh-CN",
  title: "GraiaX社区文档",
  description: "GraiaX社区文档",

  themeConfig: {
    head: [['link', { rel: 'icon', href: "/favicon.ico" }]],
    logo: "/logo.svg",
    repo: "Graiax-Community/Docs",
    editLink: false,
    notFound: [
      "你在翻什么，这里可没有涩图哦",
      "朋友，你是不是迷路了",
      "不要乱翻，会乱的"
    ],
    backToHome: "返回首页",
    sidebar: {
      "/make_ero_bot/": [
        {
          text: "手把手教你写机器人",
          children: [
            "/make_ero_bot/README.md",
            "/make_ero_bot/0_before_start.md",
            "/make_ero_bot/1_hello_ero.md",
            "/make_ero_bot/2_other_event.md",
            "/make_ero_bot/3_ero_comes.md",
            "/make_ero_bot/4_kugimiya.md",
            "/make_ero_bot/5_forward_message.md"
          ]
        },
        {
          text: "附录",
          children: [
            "/make_ero_bot/credit.md"
          ]
        }
      ]
    }
  },
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components")
      }
    ]
  ],
};