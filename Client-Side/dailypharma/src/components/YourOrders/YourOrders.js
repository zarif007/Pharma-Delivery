import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import swal from 'sweetalert';


const YourOrders = () => {

    
    const [orders, setorders] = useState([]);

    const { clientId } = useParams();


    useEffect(() => {
        fetch(`https://secure-taiga-45019.herokuapp.com/orders/${clientId}`)
        .then(res => res.json())
        .then(data => setorders(data));
    }, []);


    const cancelOrder = id => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://secure-taiga-45019.herokuapp.com/orders/${id}`, {
                        method: "DELETE"
                    }) .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount) {
                            const rest = orders.filter(order => order._id !== id);
                            setorders(rest);
                        }
                    })
                    swal("Poof! Your order has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your order is safe!");
                }
          });

        
    };


    const confirmOrder = id => {

        swal({
            title: "Success!",
            text: "You order has been confirmed!",
            icon: "success",
            button: "ok!",
        });

        fetch(`https://secure-taiga-45019.herokuapp.com/orders/${id}`, {
            method: "PATCH"
        }) .then(res => res.json())
        .then(data => {
            const rest = orders.filter(order => order._id !== id);
            let result = orders.find( ({ _id }) => _id === id );
            result.pStatus = 'confirmed';
            const updated = [...rest, result];
            setorders(updated);
        })
        
    }



    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div className="flex flex-col text-center w-full mt-5">
                <div class="mb-16 text-center mt-12">
                    <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">
                        List of Orders
                    </h2>
                    <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray dark:text-gray sm:text-4xl">
                        Your All orders ({orders.length})
                    </p>
                </div>
            </div>
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-300">
                    {
                        orders.map(order => {
                            return(
                                <div>
                                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col p-4">
                                            <span class="font-semibold title-font text-gray-700">{order.date}</span>
                                            {
                                                order.pStatus === "pending" ? <span class="mt-1 text-yellow-500 text-sm">{order.pStatus}</span>
                                                : <span class="mt-1 text-green-500 text-sm">{order.pStatus}</span>
                                            }
                                            
                                        
                                        </div>
                                        <div class="md:flex-grow">
                                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2 p-2">{order.mName}</h2>
                                            <p class="leading-relaxed">Cost: {order.mPrice} BDT</p>
                                            <button onClick={() => confirmOrder(order._id)} type="button" class="m-4 inline-flex items-center mt-4 py-2 px-4 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Confirm
                                            </button>

                                            
                                            <button onClick={() => cancelOrder(order._id)} type="button" class="m-4 inline-flex items-center mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Cancel
                                            </button>
                                        </div>
                                            
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default YourOrders
