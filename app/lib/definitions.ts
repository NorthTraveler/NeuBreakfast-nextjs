export type User ={
    id:string;
    username:string;
    password:string;
    phone:string;
    place:string;
    puborder:string;
    takeordr:string;
}

export type Food ={
    id:string;
    name:string;
    place:string;
    price:number;
    introduction:string;
    image_url:string;
};

export type Order={
    id:string;
    pubtime:string;
    content:string;
    destination:string;
    timeset:string;
    longterm:boolean;
    pubuserid:string;
    takeorder:boolean;
    taketime:string;
    takeuserid:string;
    finished:boolean;
};