module.exports = {
    base: '/',
    dest: 'dist',
    title: '养猫攻略',
    description: '你叫我一声大哥，我把你养成胖子',
    themeConfig: {
        editLinks: false,
        docsDir: 'docs',
        nav: [],
        sidebar: [{
                title: "接猫篇",
                collapsable: false,
                children: [
                    ['toHomeChapter/', '接它回家']
                ]
            },
            {
                title: "装备篇",
                collapsable: false,
                children: [
                    ['equipmentChapter/', '全副武装']
                ]
            },
            {
                title: "喂养篇",
                collapsable: false,
                children: [
                    ['foodChapter/', '喂它长大']
                ]
            },
            {
                title: "清洁篇",
                collapsable: false,
                children: [
                    ['cleanChapter/', '干干静静']
                ]
            },
            {
                title: "绝育篇",
                collapsable: false,
                children: [
                    ['sterilizationChapter/', '为爱放弃']
                ]
            },
            {
                title: "寄养篇",
                collapsable: false,
                children: [
                    ['stayChapter/', '暂时放养']
                ]
            },
            {
                title: "医疗篇",
                collapsable: false,
                children: [
                    ['careChapter/', '妙手回春']
                ]
            },
        ]
    }
}