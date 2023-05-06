import React, { useState } from 'react'
import data from "../../data/data.json"
import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import Widget from "../../components/widget/widget"
import Table from "../../components/table/table"

const Home = () => {
  const [checkedData, setCheckedData] = useState(data.raw_broadmatch_data[0]);
  const [rawField, setRawField] = useState("raw_broadmatch_data");

  return (
    <div className="flex">
      <Sidebar />
      {/* Home Container */}
      <div className="flex flex-col w-full">
        <Navbar keyword={checkedData[0]} database={data.country} />
        <div className="w-7/12 mx-auto">
          <Widget checkedData={checkedData} country={data.country} />
          {/* buttons */}
          <div className="flex justify-between text-xs p-2">
             <div>
                { rawField === "raw_broadmatch_data" ? <button className="rounded-l-xl border border-cyan-400 bg-cyan-200 px-2 py-1">Broad Match</button> : <button className="rounded-l-xl border border-gray-400 bg-gray-200 px-2 py-1" onClick={() => setRawField("raw_broadmatch_data")}>Broad Match</button> }
                { rawField === "raw_related_data" ? <button className="border border-cyan-400 bg-cyan-200 px-2 py-1">Related</button> : <button className="border border-gray-400 bg-gray-200 px-2 py-1" onClick={() => setRawField("raw_related_data")}>Related</button> }
                { rawField === "raw_question_data" ? <button className="rounded-r-xl border border-cyan-400 bg-cyan-200 px-2 py-1">Questions</button> : <button className="rounded-r-xl border border-gray-400 bg-gray-200 px-2 py-1" onClick={() => setRawField("raw_question_data")}>Questions</button> }
             </div>
             <button className="text-white rounded-md bg-gradient-to-r from-pink-700 to-purple-700 px-6 py-2">Add to List</button>
          </div>
          <Table data={data[rawField]} setCheckedData = {setCheckedData}  />
        </div>
      </div>
    </div>
  )
}

export default Home