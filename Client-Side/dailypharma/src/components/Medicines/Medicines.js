import React, { useEffect, useState } from 'react'
import Medicine from '../Medicine/Medicine';

const Medicines = () => {

    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        fetch('https://secure-taiga-45019.herokuapp.com/medicines')
        .then(res => res.json())
        .then(data => setMedicines(data));
    }, []);


    return (
        <section className="text-gray-600 body-font" id="medicines">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-15">
                    <div className="flex flex-col text-center w-full mt-5">
                        <div className="mb-16 text-center">
                            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                                Medicines
                            </h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Choose Your Medicines 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                {
                    medicines.map(medicine => {
                        return(
                            <Medicine key={medicine._id} medicine={medicine}></Medicine>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default Medicines
