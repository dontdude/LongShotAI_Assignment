import React from 'react'

const navbar = (props) => {
  return (
    <div className="mx-8 mt-4">
      <span className="text-xs text-slate-500">keyword Explorer &gt; </span>
      <span className="text-xs">keyword Overview</span>
      <h1 className="font-bold mt-3">Keyword: <span className="text-gray-500 ">{props.keyword}</span></h1>
      <span className="text-xs">Database: {props.database.toUpperCase()} <img className="h-3 w-4 inline-block" src={`https://img.geonames.org/flags/x/${props.database}.gif`} alt={`${props.database} flag`} /></span>
      <hr className="border-gray-300 border-1 my-2" />
    </div>
  )
}

export default navbar