import React, { useState } from "react";

const intentMap = {
  0: {
    type: "Commercial",
    "hover-text": "The user wants to investigate brands or services.",
    color: { bg: "#FCE081", text: "#A75800", hover: "#ffca6e" },
  },
  1: {
    type: "Informational",
    "hover-text": "The user wants to find an answer to a specific question.",
    color: { bg: "#C4E5FE", text: "#006DCA", hover: "#61c6ff" },
  },
  2: {
    type: "Navigational",
    "hover-text": "The user wants to find a specific page or site.",
    color: { bg: "#EDD9FF", text: "#8649E1", hover: "#c59dfa" },
  },
  3: {
    type: "Transactional",
    "hover-text": "The user wants to complete an action (conversion).",
    color: { bg: "#9EF2C9", text: "#007C65", hover: "#11d6a6" },
  },
};

const Intent = ({intent, length}) => {
    const intentInfo = intentMap[intent];
    const [showInfo, setShowInfo] = useState(false);
     
    if(intentInfo) {
        return (
            <div 
                style={{ backgroundColor: `${intentInfo.color.bg}` }}
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)} 
                className="w-fit rounded-md relative"
            >
                {length === "1" ?
                      <span style={{ color: `${intentInfo.color.text}` }} className="py-2 px-1">{intentInfo.type[0]}</span> : 
                      <span style={{ color: `${intentInfo.color.text}` }} className="px-2 py-2 m-2">{intentInfo.type}</span>    
                }
                {showInfo && (
                    <div style={{ backgroundColor: `${intentInfo.color.hover}` }} className="absolute text-white rounded p-2 text-xs border">{intentInfo['hover-text']}</div>
                )}
            </div>
        )
    } else {
        return (
            <span>N/A</span>
        )
    }
  }
  
export default Intent;
