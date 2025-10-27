'use client'
import React from 'react'
import Link from 'next/link'


export default function DashboardLayout({ children }){
return (
<div className="min-h-screen flex">
<aside className="hidden md:block w-64 border-r p-4">
<nav className="space-y-2">
<Link href="/dashboard" className="block p-2 rounded hover:bg-gray-50">Overview</Link>
<Link href="/dashboard/settings" className="block p-2 rounded hover:bg-gray-50">Settings</Link>
</nav>
</aside>
<div className="flex-1 p-6">
{children}
</div>
</div>
)
}