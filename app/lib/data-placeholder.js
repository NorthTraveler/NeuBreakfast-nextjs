const users=[
    {
        id:'1',
        username:'a',
        password:'123456',
        phone:'11234567890',
        place:'1舍B512',
    },
    {
        id:'2',
        username:'b',
        password:'123456',
        phone:'11234567890',
        place:'2舍B512',
    }
]

const foods = [
    {
        id:'1s1lc1',
        name:'鸡蛋',
        place:'一食堂一楼',
        price:'1',
        introduction:'来自一食堂一楼的水煮蛋，丰富的蛋白质',
        image_url:'/pubilc/egg.jpg',

    },
    {
        id:'1s1lc2',
        name:'手抓饼',
        place:'一食堂一楼',
        price:'5',
        introduction:'来自一食堂一楼的饼食，能填饱肚子',
        image_url:'/pubilc/egg.jpg',
    },

]
const orders =[
    {
        id:users[0].id,
        pubtime:'2024-06-28 15:45:30',
        ordercontent:'测试数据1',
        orderdestination:'5舍B121',
        orderterm:'2024-06-29 12:00:00',
        longterm:'FALSE',
        pubuserid:'1',
        ordertaked:'FALSE',
        ordertaketime:'NULL',
        takeuserid:'NULL',
        orderfinished:'NULL',

    },
    {
        id:users[1].id,
        pubtime:'2024-06-28 14:45:30',
        ordercontent:'测试数据2',
        orderdestination:'3舍B221',
        orderterm:'2024-06-29 12:00:00',
        longterm:'FALSE',
        pubuserid:'1',
        ordertaked:'FALSE',
        ordertaketime:'NULL',
        takeuserid:'NULL',
        orderfinished:'NULL',

    }
]

module.exports ={
    users,
    foods,
    orders,
};