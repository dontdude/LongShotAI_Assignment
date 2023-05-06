import React, { useState } from 'react'

const Intent = ({intentInfo}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div 
       style={{ backgroundColor: `${intentInfo.color.bg}` }}
       onMouseEnter={() => setShowInfo(true)}
       onMouseLeave={() => setShowInfo(false)} 
       className="w-fit rounded-md relative"
    >
       <span style={{ color: `${intentInfo.color.text}` }} className="py-2 px-1">{intentInfo.type[0]}</span>
       {showInfo && (
            <div style={{ backgroundColor: `${intentInfo.color.hover}` }} className="absolute text-white rounded p-2 text-xs border">{intentInfo.hoverText}</div>
        )}
    </div>
  )
}

export default Intent