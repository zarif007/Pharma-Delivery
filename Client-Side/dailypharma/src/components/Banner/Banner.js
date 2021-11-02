import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="relative bg-white overflow-hidden" id="header">
        <div className="max-w-7xl mx-auto ">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                    <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
                        <span className="block xl:inline text-gray-600">Get your Medicine Delivered</span>{' '} <br/>
                        <span className="block text-gray-500 xl:inline">From PharmaDelivery</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    You can also sell and delivery through our platform
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                        <a href="#medicines"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 md:py-4 md:text-lg md:px-10"
                        >
                            Order
                        </a>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                        <Link to="/addproduct"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                        >
                            Be a Seller
                        </Link>
                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 py-2">
                <img
                className="h-46 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://www.apptunix.com/blog/wp-content/uploads/sites/3/2020/06/medicine-delivery-app.jpg"
                    alt="header"
                />
        </div>
    </div>
  )
}

export default Banner
