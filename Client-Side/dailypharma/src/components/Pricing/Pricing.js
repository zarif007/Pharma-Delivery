import React from 'react'

const Pricing = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font" id="pricing">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <div className="flex flex-col text-center w-full mt-10">
                <div class="mb-16 text-center">
                    <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
                        Pricing
                    </h2>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white dark:text-white sm:text-4xl">
                        Our Pricing
                    </p>
                </div>
            </div>
            </div>
            <div class="lg:w-2/3 w-full mx-auto overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Plan</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Delivery Time</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Upto 500 gm</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">500 gm to 1 Kilo</th>
                    <th class="w-10 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tr rounded-br"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="px-4 py-3 text-lg text-white">Same City Delivery</td>
                    <td class="px-4 py-3">24 Hours</td>
                    <td class="px-4 py-3">BDT 60</td>
                    <td class="px-4 py-3 ">BDT 60</td>
                    <td class="w-10 text-center">
                    </td>
                </tr>
                <tr>
                    <td class="border-t-2 border-gray-800 px-4 py-3 text-lg text-white">Inter City Delivery</td>
                    <td class="border-t-2 border-gray-800 px-4 py-3">72 Hours</td>
                    <td class="border-t-2 border-gray-800 px-4 py-3">BDT 100</td>
                    <td class="border-t-2 border-gray-800 px-4 py-3 ">BDT 120</td>
                    <td class="border-t-2 border-gray-800 w-10 text-center">
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </section>
  )
}

export default Pricing
