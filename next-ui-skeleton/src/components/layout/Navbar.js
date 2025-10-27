"use client"
import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button'


export default function Navbar(){
return (
<nav className="w-full bg-white border-b">
<div className="container flex items-center justify-between h-16">
<Link href="/" className="font-bold text-lg">Brand</Link>
<div className="hidden md:flex items-center space-x-4">
<Link href="/dashboard" className="text-sm">Dashboard</Link>
<Link href="/about" className="text-sm">About</Link>
<Button small>Sign in</Button>
</div>
<div className="md:hidden">
{/* simple mobile menu button */}
<button aria-label="Open menu" className="p-2">
<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
</button>
</div>
</div>
</nav>
)
}