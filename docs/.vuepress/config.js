module.exports = {
    base: '/cat-docs/',
    dest: 'dist',
    title: '养猫攻略',
    description: '你叫我一声大哥，我把你养成胖子',
    themeConfig: {
        editLinks: false,
        docsDir: 'docs',
        nav: [],
        sidebar: [{
                title: "生活篇",
                collapsable: false,
                children: [
                    ['lifeChapter/', '猫的生活'],
                ]
            },
            {
                title: "食物篇",
                collapsable: false,
                children: [
                    'foodChapter/mainFood',
                    'foodChapter/otherFood',
                ]
            },
            {
                title: "玩具篇",
                collapsable: false,
                children: [
                    "toyChapter/toyChapter"
                ]
            },
            {
                title: "疫苗篇",
                collapsable: false,
                children: [
                    "vaccineChapter/vaccineChapter"
                ]
            }
        ]
    }
}