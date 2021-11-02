import React, { useRef } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router';
import swal from 'sweetalert';

const AddMedicine = () => {

    const history = useHistory();

    const pName = useRef(null);
    const pCompanyName = useRef(null);
    const pVolume = useRef(null);
    const pPrice = useRef(null);
    const pImgUrl = useRef(null);

    const addProduct = e =>{
        e.preventDefault();

        axios.post('https://secure-taiga-45019.herokuapp.com/medicines', {
            name: pName.current.value,
            company_name: pCompanyName.current.value,
            image: pImgUrl.current.value,
            mg: pVolume.current.value,
            pricePerPiece: pPrice.current.value
        }) .then(res => console.log(res));

        pName.current.value = '';
        pCompanyName.current.value = '';
        pImgUrl.current.value = '';
        pVolume.current.value = '';
        pPrice.current.value = '';

        swal({
            title: "Success!",
            text: "You product has been confirmed!",
            icon: "success",
            button: "ok!",
        }).then(() => {
            history.push('/');
        })

        

    }

    return (
        <div class="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden mt-12">
            <div class="px-4 py-8 sm:px-10">
                <div class="relative mt-6">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300">
                        </div>
                </div>
                <div class="relative flex justify-center text-sm leading-5">
                    <span class="px-2 text-gray-500 bg-white">
                        Medicine addining criteria
                    </span>
                </div>
            </div>
            <div class="mt-6">
                <div class="w-full space-y-6">
                    <div class="w-full">
                                <div class=" relative ">
                                    <input ref={pName} type="text" id="search-form-price" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Medicine name"/>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input ref={pCompanyName} type="text" id="search-form-location" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Company Name"/>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input ref={pVolume} type="text" id="search-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Volume"/>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input ref={pPrice} type="text" id="search-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Price Per Piece"/>
                                    </div>
                                </div>
                                <div class="w-full">
                                    <div class=" relative ">
                                        <input ref={pImgUrl} type="text" id="search-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Image URL"/>
                                    </div>
                                </div>
                                <div>
                                    <span class="block w-full rounded-md shadow-sm">
                                        <button onClick={addProduct} type="button" class="py-2 px-4  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                            ADD
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default AddMedicine
