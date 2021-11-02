import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import useFireBase from './../../hooks/useFireBase';
import swal from 'sweetalert';



const PlaceOrder = () => {
    
    const [medicine, setMedicine] = useState({});

    const { medicineId } = useParams();

    const { user } = useFireBase();

    const history = useHistory();
    
    useEffect(() => {
        fetch(`https://secure-taiga-45019.herokuapp.com/medicines/${medicineId}`)
        .then(res => res.json())
        .then(data => setMedicine(data))
    }, []);

    const price = parseInt(medicine.pricePerPiece) * 10;
    const totalPrice = price + 60;

    const today = new Date().toLocaleDateString();

    const clientId = user.uid;

    const data = {
        mId: medicineId,
        mName: medicine.name,
        mPrice: totalPrice,
        client: clientId,
        pStatus: 'pending',
        date: today
    }

    const placeOrder = e => {

        axios.post('https://secure-taiga-45019.herokuapp.com/orders',
        data) .then(res => console.log(res));
        
        swal({
          title: "Order Added",
          text: "Want to visit Your orders or order more?",
          icon: "success",
          buttons: true,
          dangerMode: false,
        })
        .then((willDelete) => {
              if (willDelete) {
                  history.push(`/orders/${clientId}`);
              } else {
                  history.push(`/`);
              }
        });
        
    }
    
    return (
        <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src={medicine.image}/>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">{medicine.company_name}</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{medicine.name}</h1>
              <div class="flex mb-4">
                
              </div>
              <p class="leading-relaxed">Volume: {medicine.mg}</p>
              
              <div>
                <p class="title-font font-medium text-2xl text-gray-900">Pricing</p>
                <p class="title-font font-medium text-2xl text-gray-900">Product Cost: {price} BDT</p>
                <p class="title-font font-medium text-2xl text-gray-900 mb-3">Delivery Cost: 60 BDT</p>
                <hr/>
                <p class="title-font font-medium text-2xl text-gray-900 mt-3">Total Cost: {totalPrice}</p>
                {/* <button class="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded items-center justify-center">Button</button> */}
                <button onClick={placeOrder} class="flex ml-auto text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded bg-gray-300 p-0 border-0 inline-flex items-center justify-center ml-4 mt-5">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default PlaceOrder
