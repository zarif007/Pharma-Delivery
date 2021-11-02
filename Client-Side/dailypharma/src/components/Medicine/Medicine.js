import React from 'react'
import { Link } from 'react-router-dom';

const Medicine = ({medicine}) => {

    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={medicine.image} alt="content"/>
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Brand: {medicine.company_name}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{medicine.name}</h2>
                <p className="leading-relaxed text-base">Volume: {medicine.mg}mg</p>
                <p className="leading-relaxed text-base">Price/Piece: {medicine.pricePerPiece}TK</p>
                <Link to={`/medicine/${medicine._id}`} type="button" className="mt-5 py-2 px-4  bg-gray-800 hover:bg-gray-900 focus:ring-gray-700 focus:ring-offset-gray-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Order Now
                </Link>
            </div>
        </div>
    )
}

export default Medicine
