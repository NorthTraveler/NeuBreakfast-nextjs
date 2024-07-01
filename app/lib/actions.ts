'use server';
import { time } from 'console';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const OrderSchema = z.object({
  id: z.string(),
  pubuserid:z.string(),
  pubtime:z.string(),
  content:z.string(),
  destination:z.string(),
  timeset:z.string(),
  longterm:z.boolean(),
})
  
const UpdateOrder = OrderSchema.omit({ id:true,pubtime:true});
const CreateOrder = OrderSchema.omit({ id:true,pubtime:true});

export type State ={
    errors?: {
        pubuserid?: string[];
        content?: string[];
        destination?:string[];
        timeset?:string[];
        longterm?:boolean[];
      };
      message?: string | null;
}
//创建订单
export async function createOrder(prevState:State, orderData:FormData):Promise<State>{
  const {pubuserid, content,destination,timeset,longterm} = CreateOrder.parse({
    pubuserid:orderData.get('pubuserid'),
    content:orderData.get('content'),
    destination:orderData.get('destination'),
    timeset:orderData.get('orderterm'),
    longterm:orderData.get('longterm'),
  });

  const pubtime = new Date().toISOString()

  try{
    await sql`
    INSERT INTO orders (pubuserid, pubtime, content,destination,timeset,longterm)
    VALUES (${pubuserid},${pubtime},${content},${destination},${timeset},${longterm})
    `;}
    catch(error){
      return {message:'数据库创建订单失败',}
    }
    revalidatePath('/dashboard/myorder');
    redirect('/dashboard/myorder');
}
//订单删除
export async function updateOrder(id:string,orderData:FormData) {
  const {pubuserid, content,destination,timeset,longterm} = UpdateOrder.parse({
    pubuserid:orderData.get('pubuserid'),
    content:orderData.get('content'),
    destination:orderData.get('destination'),
    timeset:orderData.get('orderterm'),
    longterm:orderData.get('longterm'),
  });
  try {
    await sql`
    UPDATE orders
    SET pubuserid = ${pubuserid},content = ${content},destination = ${destination},timeset = ${timeset},longterm = ${longterm}
    WHERE id =${id}
    `;}
    catch(error){
      return {
        message:'更新数据表失败!',
      }
    }
    revalidatePath('/dashboard/myorder');
    redirect('/dashboard/myorder');
}
export async function deleteOrder(id: string) {
  try {
    await sql`DELETE FROM orders WHERE id = ${id}`;
    revalidatePath('/dashboard/myorder');
    return {message:'deleteOrder：订单已删除！'};   
  }catch(error){
    return {message:'deleteOrder：订单删除失败！'}
  }
}

//登录
export async function loginin(
  prevState:string | undefined,
  formData:FormData,
  ) {
    try{

    }catch(error){}

}