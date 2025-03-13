import React from 'react'
import DashboardLayout from './provider'

function layout({ children }) {
  return (
    <div>
        <DashboardLayout>
        {children}
        </DashboardLayout>
    </div>
  )
}

export default layout