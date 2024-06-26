import Link from "next/link";
import TopLinks from "./top-links";

export default function TopNav(){
    return (
<div className="text-sm font-medium text-gray-500 border-b border-gray-200">
    <ul className="flex flex-wrap -mb-px justify-end">
      <li className="relative top-0 grow inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">
      <Link href="/dashboard">
      <img 
      src="/NBlogo.svg"
      alt="NB Logo"
      height="15%" 
      width="15%" /></Link>
      </li>
      <li className="mr-auto">
          <TopLinks />
      </li>
    </ul>
</div> 
      );
}