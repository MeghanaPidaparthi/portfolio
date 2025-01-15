import React from 'react'

const PageNotFound = () => {
  return (
 
      
          <main className="grid min-h-screen place-items-center bg-background px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-primaryPurple">404</p>
              <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
                Page not found
              </h1>
              
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/"
                  className="rounded-md bg-primaryPurple px-4 py-2 text-sm font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Go back home
                </a>
                
              </div>
            </div>
          </main>
    
      
  )
}

export default PageNotFound
