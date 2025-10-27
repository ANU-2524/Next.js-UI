import './globals.css'
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


export const metadata = {
title: 'NextJS UI Skeleton',
description: 'A small UI skeleton using Next.js + Tailwind',
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="min-h-screen flex flex-col">
<Navbar />
<main className="flex-1 w-full container py-8">{children}</main>
<Footer />
</body>
</html>
)
}