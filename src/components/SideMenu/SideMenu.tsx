import React from "react"
import NavList from "./NavList/NavList"

const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-rose-400 text-white">
        <div>
            <h1 className="px-4 text-2xl font-bold">つみあげタスク</h1>
            <NavList />
        </div>
    </div>
  )
}

export default SideMenu