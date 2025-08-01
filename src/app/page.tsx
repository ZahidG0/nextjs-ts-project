import Gallery from '@/components/gallery/Gallery';
import Header from '@/components/Header';
import Navbar from '@/components/navbar/Navbar';
import { SearchProvider } from '@/components/SearchProvider';
import React from 'react'

const HomePage = () => {
  return (
    <SearchProvider>
      <main className="flex min-h-screen bg-sky-200 text-black items-center justify-center p-24">
        <div className='w-full max-w-screen-2xl text-center p-20 bg-slate-100 rounded-lg shadow-lg mx-auto'>

          {/* Components For Layout */}
          <Navbar />
          <div className='mb-10'>
            <h1 className="text-4xl font-bold mb-4">Welcome to the Next.js TypeScript Project</h1>
            <p className="text-lg">This is a simple example of a Next.js application using TypeScript.</p>
          </div>
          <Header />
          <Gallery />
        </div>
      </main>
    </SearchProvider>
  )
}

export default HomePage;