import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from './_components/AppSideBar'
import AppHeader from './_components/AppHeader'

function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
        <AppSidebar/>
    <div className='w-full'>
        <AppHeader/>
        {children}
    </div>
    </SidebarProvider>
  )
}

export default DashboardLayout