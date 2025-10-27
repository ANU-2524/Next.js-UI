import React from 'react'
import Button from '../components/ui/Button'


export default function HomePage() {
return (
<div className="space-y-6">
<header className="flex flex-col md:flex-row items-start md:items-center justify-between">
<div>
<h1 className="text-3xl font-bold">Next.js UI Skeleton</h1>
<p className="text-gray-600">Reusable components & responsive layout</p>
</div>
<div className="mt-4 md:mt-0">
<Button>Get Started</Button>
</div>
</header>


<section className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-6 border rounded">Card 1</div>
<div className="p-6 border rounded">Card 2</div>
<div className="p-6 border rounded">Card 3</div>
</section>
</div>
)
}