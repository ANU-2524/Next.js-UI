import React from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'


export default function DashboardRootLayout({ children }) {
return (
<DashboardLayout>
{children}
</DashboardLayout>
)
}


-- File: src/app/dashboard/page.tsx --
import React from 'react'


export default function DashboardPage() {
return (
<div>
<h2 className="text-2xl font-semibold">Dashboard</h2>
<p className="text-gray-600 mt-2">Welcome to your dashboard — this is a placeholder.</p>
</div>
)
}