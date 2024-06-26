import { lusitana } from '../app/ui/fonts';
import { Suspense } from 'react';
export default function Page() {
    return (
    <>
    <p>早餐的益处长图</p>
    <h1>这里是主页</h1>
    <p>订单总数，长期订单数，临时订单数，用户数量</p>
    <p>最新订单：更多-》以日期排序</p>
    <p>长期待接订单（是否根据价格排序？）</p>
    <p>加急订单:价格高，要求快速配送</p>
    <p>图标可视化:近日新增订单，完成订单</p>

    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        仪表盘页面
      </h1>

    </main>
    </>
    )
  }
