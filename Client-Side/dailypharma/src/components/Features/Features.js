import React from 'react'

const Features = () => {
  return (
    <div class="sm:flex flex-wrap justify-center items-center text-center gap-8 bg-gray-900" id="features">
        <div className="flex flex-col text-center w-full mt-5">
            <div class="mb-16 text-center mt-12">
                <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
                    Features
                </h2>
                <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
                    Why we are Best!!!
                </p>
            </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
            <div class="flex-shrink-0">
                <div class="flex items-center mx-auto justify-center h-16 w-16 rounded-md text-white">
                    <img src="https://www.svgrepo.com/show/100083/time.svg"/>
                </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                3 Days Guaranteed Delivery
            </h3>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div class="flex-shrink-0">
                <div class="flex items-center mx-auto justify-center h-16 w-16 rounded-md text-white">
                    <img src="https://www.svgrepo.com/show/26823/door.svg"/>
                </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                Doorstep Pickup and Delivery
            </h3>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div class="flex-shrink-0">
                <div class="flex items-center mx-auto justify-center h-16 w-16 rounded-md text-white">
                    <img src="https://www.svgrepo.com/show/286271/sms.svg"/>
                </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                SMS Update
            </h3>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div class="flex-shrink-0">
                <div class="flex items-center mx-auto justify-center h-16 w-16 rounded-md text-white">
                    <img src="https://www.svgrepo.com/show/208355/checked-payment.svg"/>
                </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                Imidiate Payment
            </h3>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div class="flex-shrink-0">
                <div class="flex items-center mx-auto justify-center h-16 w-16 rounded-md text-white">
                    <img src="https://www.svgrepo.com/show/261316/check-money.svg"/>
                </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                Best Cash On Delivery Rate
            </h3>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div class="flex-shrink-0">
                <div class="flex items-center mx-auto justify-center h-16 w-16 rounded-md text-white">
                    <img src="https://www.svgrepo.com/show/125080/security.svg"/>
                </div>
            </div>
            <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                Secure Handling
            </h3>
        </div>
    </div>
  )
}

export default Features
