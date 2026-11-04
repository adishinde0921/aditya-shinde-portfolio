import { useState } from "react";
import { motion } from "motion/react"

function PullCard({ onReveal }){

    const [cordLength, setCordLength]= useState(85);

    function handleDrag(_, info){
        setCordLength(85 + Math.max(0, info.offset.y));
    }
    function handleDragEnd(_, info){
        if (info.offser.y > 65){
            onReveal();
        }
        setcoedLength(85);
    }

    return(
        <div className="flex flex-col items-center">

            {/*Hanging Rope */}
            <div className = "w-[2px] bg-bronze"
            style={{height: `${cordLength}`}}/>

            {/*Pull Handle */}
             <motion.button 
             type="button"
             drag = "y"
             dragConstraints = {{top:0, bottom: 130}}
             dragElastic={0.12}
             dragSnapToOrigin
             onDrag={handleDrag}
             onDragEnd={handleDragEnd}
             onClick={onReveal}
             whileHover={{scale: 1.12}}
             whileTap={{scale: 1.12}}
             aria-lable="pull the cord to reveal my Portfolio"
             className="relative -mt-1 flex h-7 w-7 cursor-grap items-center justify-center rounded-full border-2 border-bronze bg-night active:cursor-grabbing"
             >
                <span className="h-2 w-2 rounded-full bg-bronze"/>

             </motion.button>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">Pull To Enter</p>

        </div>
   
    )
}
export default PullCard;