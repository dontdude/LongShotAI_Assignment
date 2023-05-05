import React from 'react'
import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Navbar />
    </div>
  )
}

export default Home