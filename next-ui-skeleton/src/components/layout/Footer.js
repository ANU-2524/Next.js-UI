import React from 'react'


export default function Footer(){
return (
<footer className="w-full border-t bg-white">
<div className="container py-6 text-center text-sm text-gray-600">
© {new Date().getFullYear()} NextJS UI Skeleton — Built with Tailwind
</div>
</footer>
)
}