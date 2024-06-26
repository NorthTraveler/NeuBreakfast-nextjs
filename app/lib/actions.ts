'use server';



export type State ={
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
      };
      message?: string | null;
}
export default function Order({c})


export async function createOrder(prevState:State, orderData:FormData){

}