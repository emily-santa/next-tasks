import SideMenu from "../../components/SideMenu/SideMenu";
import React from "react";

const MainLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)=> {
  return (
    <div className="flex h-screen">
        <SideMenu />
        <main className="bg-gray-50 flex-1 overflow-auto">{children}</main>
    </div>
  )
}

export default MainLayout