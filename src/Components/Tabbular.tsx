import { productType } from '@/constants';
import React from 'react'

interface Props{
    SelectedTab: string;
    onTabSelect: (tab: string) => void;
}
export default function Tabbular({SelectedTab, onTabSelect}: Props) {
  return (
    <div className='flex gap-4 items-center'>
      {productType.map((item) => (
        <button 
        onClick ={()=> onTabSelect(item?.title)}
        key={item?.title} className={`px-4 py-2 rounded-lg ${SelectedTab === item.title && 'bg-black text-white'}`} >
            {item?.title} 
        </button>
      ))}
    </div>
  )
}
