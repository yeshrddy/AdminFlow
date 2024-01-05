import React from 'react'
import PageWrapper from '../PageWrapper'
import SideNav from '../SideNav'
import { Outlet } from 'react-router-dom'

const AdminDashboard = ({children}) => {
  return (
    <main className="flex rounded-lg p-4 pt-7 md:mx-7 mt-32 min-h-screen gap-2">
      <SideNav />
      <div className="flex-1 rounded-lg flex flex-col min-h-screen">
        <div className="min-h-screen ">
          {children}
          <PageWrapper>
            <Outlet/>
          </PageWrapper>
        </div>
      </div>
  </main>
  )
}

export default AdminDashboard