
import { fetchFoodCardData } from '../app/lib/data';

export default function FoodCard(){

    return(
<div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img className="h-64 w-full object-cover object-center" src="/egg.jpg" alt="商品1图片" />
        <div className="p-4">
        <div className="flex items-baseline justify-between">
            <div>
                <h2 className="text-lg font-semibold mb-1">商品名称1</h2>
                <p className="text-gray-700  mb-1">¥价格1</p>
                <p className="text-gray-500 text-sm mb-4">商品简述1...</p>
            </div>
            <div className="text-right ">
                <p className="text-gray-600 font-medium">地址: 商品地址1</p>
            </div>
            </div>
      </div>
    </div>
    </div>
</div>
    )
}
 