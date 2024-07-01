'use client';
import { useActionState } from "react";
import { createOrder,State } from "../../lib/actions";
import { UserField } from "../../lib/definitions";
export default function Order({users}:{users:UserField[]}){
    const initialState: State = { message:null, errors: {} };
    const [state,formAction] = useActionState (createOrder,initialState);
    return (
        <form action={formAction}>
            {/* 整体框架 */}
            <div className="w-96  m-10 justif   y-center">
                订单填写

                {/* 第一个要素 */}
                <div className=" relative m-5">
                    <label htmlFor="content" 
                        className="text-gray-700">
                        订单内容
                    <span className="text-red-500 required-dot">
                    *
                    </span>
                    </label>
                    <input type="text" id="required-content" 
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                        name="content" placeholder="订单内容"/>
                </div>

            {/* 第二个要素 */}
             <div className=" relative m-5">
                 <label htmlFor="required-email" 
                    className="text-gray-700">
                    Email
                    <span className="text-red-500 required-dot">
                    *
                    </span> 
                </label>
                <input type="text" id="required-email" 
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your email"/>
             </div>
            {/* 第三个要素 */}
            <div className=" relative m-5">
                <label htmlFor="required-email" 
                    className="text-gray-700">
                    Email
                    <span className="text-red-500 required-dot">
                    *
                    </span>
                </label>
            <input type="text" id="required-email" 
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="email" placeholder="Your email"/>
            </div>

    
            <div>
                <label htmlFor="price" 
                    className="block text-sm font-medium text-gray-700">
                 Price
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">
                        $
                        </span>
                    </div>
                    <input type="text" name="price" id="price" 
                        className="block w-full px-4 py-2 pr-12 border-t border-b border-l border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 pl-7 sm:text-sm" placeholder="0.00"/>
                         <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="currency" 
                            className="sr-only">
                            Currency
                        </label>
                         <select id="Currency" name="currency" 
                            className="h-full px-4 py-2 pl-2 text-gray-500 bg-transparent border-t border-b border-r border-transparent border-gray-300 focus:ring-indigo-500 bo focus:border-indigo-500 pr-7 sm:text-sm rounded-r-md">
                            <option>
                            RMB
                            </option>
                            <option>
                            CAD
                            </option>
                            <option>
                            EUR
                            </option>
                        </select>
                        </div>
                    </div>
                </div>

        <label className="text-gray-700 m-5" htmlFor="time">
            截至时间
            <input type="time" className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
        </label>
    
        <label className="text-gray-700 m-5" htmlFor="name">
            备注
            <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="请输入你的内容" name="comment" rows={5} cols={40}>
            </textarea>
        </label>

        <button
            className="m-5 justify-center flex items-center gap-2 px-5 py-3 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
            </svg>
            订单提交
        </button>

    </div>
        </form>

    )
}
