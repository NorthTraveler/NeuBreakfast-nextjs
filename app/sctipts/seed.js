const { db } = require('@vercel/postgres');

const {
    users,
    foods,
    orders,
} =require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client){
    try{
        await client.sql `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
          CREATE TABLE IF NOT EXISTS users(
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            password TEXT NOT NULL,
            phone TEXT NOT NULL,
            place TEXT NOT NULL,
            );
        `;
        console.log(`创建users表成功`)

        const insertedUsers = await Promise.all(
            users.map(async(user) =>{
                const hashedPassword = await bcrypt.hash(user.password,10);
                return client.sql`
                INSERT INTO users(id,username,hashedPassword,phone,place)
                VALUES (${user.id},${user.name},${hashedPassword},${user.phone},${user.place})
                ON CONFLICT (id) DO NOTHING;
                `;
            })
        );
        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users:insertedUsers,
        }
    }catch (error) {
        console.error('发送用户失败:', error);
        throw error;
      }
}

async function seedFoods(client) {
    try{
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        const  createTable =await client.sql`
        CREATE TABLE IF NOT EXISTS foods (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            place VARCHAR(255) NOT NULL,
            price FLOAT NOT NULL,
            time VARCHAR(255)
            introduction VARCHAR(255) NOT NULL,
            image_url VARCHAR(255) NOT NULL,
        );
        `;

        console.log(`创建foods表成功`);

        const insertedFoods = await Promise.all(
            foods.map(
                (food) => client.sql`
                INSERT INTO customers (id, name, place, price, time, introduction,image_url)
                VALUES(${food.id},${food.name},${food.place},${food.price},${food.time},${food.introduction},${food.image_url})
                ON CONFLICT (id) DO NOTHING;
                `
            ),
        );
    } catch(error){
        console.error('插入食物表出错:',error);
        throw error;
    }}

    async function seedOrders(client) {
        try{
            await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    
            const  createTable =await client.sql`
            CREATE TABLE IF NOT EXISTS orders (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                pubtime DATETIME NOT NULL,
                ordercontent TEXT NOT NULL,
                orderdestination VARCHAR(255) NOT NULL,
                orderterm DATETIME,
                longterm BOOLEAN NOT NULL,
                pubuserid VARCHAR(255) NOT NULL,
                ordertaked BOOLEAN,
                ordertaketime DATETIME,
                takeuserid VARCHAR(255),
                orderfinished BOOLEAN,
            );
            `;
    
            console.log(`创建oreders表成功`);
    
            const insertedFoods = await Promise.all(
                foods.map(
                    (order) => client.sql`
                    INSERT INTO customers (id, pubtime, ordercontent, orderdestination, orderterm, longterm)
                    VALUES(${order.id},${order.pubtime},${order.ordercontent},${order.orderdestination},${order.image_url})
                    ON CONFLICT (id) DO NOTHING;
                    `
                ),
            );
        } catch(error){
            console.error('插入订单表出错:',error);
            throw error;
        }}  