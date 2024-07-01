import { sql } from '@vercel/postgres';
import {
    User,Food,Order
} from './definitions'
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
// 本文件主要用于处理数据
export async function fetchfoodcard(){
    // noStore();
    try {
        const data = await sql<Food>`SELECT * FROM foods`;
        return data.rows;
    }catch (error){
        console.error('fetchfoodcard错误:',error);
        throw new Error('传入food数据失败');
    }
}

export async function fetchLatestOrders(){
    try {
        const data = await sql<Lates
    }

}