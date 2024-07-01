import Order from "../../ui/orders/create-order";

export default function Page() {
    // const user = await getloginuser();
    const user =  [{id:'1',username:'2'}]
    return (
      <>
      <Order users={user}/>
      </>

    );
  }