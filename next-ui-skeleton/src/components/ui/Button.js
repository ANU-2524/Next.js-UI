'use client'
import React from 'react'


// type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
// variant?: 'primary' | 'secondary' | 'ghost'
// small?: boolean
// }


export default function Button({ variant='primary', small=false, className='', children, ...rest }){
const base = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
const sizes = small ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'
const variants  = {
primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
ghost: 'bg-transparent text-gray-700'
}
return (
<button className={[base, sizes, variants[variant], className].join(' ')} {...rest}>
{children}
</button>
)
}