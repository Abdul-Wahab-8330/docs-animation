import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

  const ref = useRef(null)

  const data = [
    {
      desc: "this is the default card description that is visible to the user",
      filesize: "0.9 mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    },
    {
      desc: "this is the default card description that is visible to the user",
      filesize: "0.9 mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "sky" }
    },
    {
      desc: "this is the default card description that is visible to the user",
      filesize: "0.9 mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }
    }
  ]

  return (
    <div ref={ref} className='fixed z-[3] h-full w-full top-0 left-0 flex gap-7 flex-wrap p-5'>
      {data.map((item,index)=>(
        <Card key={index} data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground
