import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
const Card = ({ data,reference }) => {

 

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 210 }} className='flex-shrink-0 relative w-56 h-64 rounded-[50px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
      <FaRegFileAlt />
      <p className=' text-sm font-semibold leading-tight mt-4'>{data.desc}</p>
      <div className='footer absolute w-full bottom-0 left-0  '>
        <div className='flex items-center justify-between px-8 py-3 '>
          <h2>{data.filesize}</h2>
          <span className='w-7 h-7 rounded-full bg-zinc-600 flex justify-center items-center '>
            {data.close ? < IoClose /> : <LuDownload size="0.7em" color="white" />}
          </span>
        </div>
        {data.tag.isOpen && (<div className={`footertag w-full py-3 ${data.tag.tagColor==="green"?"bg-green-600":"bg-sky-600"} flex justify-center items-center`}>
          <h3 className='text-sm font-semibold '>{data.tag.tagTitle}</h3>
        </div>)}
      </div>

    </motion.div>
  )
}

export default Card
