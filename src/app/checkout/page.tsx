import Form from '@/Components/form'
import { client } from '@/sanity/lib/client'
import React from 'react'

const getDatr = async ()=>{
    const query = `*[_type=="product" ]`
    const res  = client.fetch(query)
    return res
}

export default async function Checkout() {
    const ress = await  getDatr()
  return (
    <div>
      {ress.map((item)=>(
        <div key={item.id}>
            <Form postId={item.id}/>

        </div>
      ))}
    </div>
  )
}
