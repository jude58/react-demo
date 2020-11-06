import Mock from 'mockjs'


export default Mock.mock('/getdata1','get',{
    success: true,
    message: '@cparagraph',
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'special_class|5': [
        {
        // 属性 title 是一个自增数，起始值为 1，每次增 1
        'title|+1': [
            '最新动态',
            '焦点关注',
            '人物专访',
            '观点评论',
            '平行论坛',
        ],
        // 属性 id 是一个5位的随机码
        'id|+1': 1,
    }
    ]
})