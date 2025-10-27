'use client'
import React from 'react'


// type Props = React.InputHTMLAttributes<HTMLInputElement> & {
// label?: string
// }


export default function Input({ label, className='', ...rest }){
return (
<label className="block">
{label && <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>}
<input className={["w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-indigo-200", className].join(' ')} {...rest} />
</label>
)
}