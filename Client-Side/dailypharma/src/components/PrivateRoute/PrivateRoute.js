import React from 'react'
import { Redirect, Route } from 'react-router'
import useFireBase from '../../hooks/useFireBase'
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const PrivateRoute = ({children, ...rest}) => {
    
    const {user, isLoading} = useFireBase();

    if(isLoading){
        return(
            <div class=" flex justify-center items-center">
                <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
        )
    } 

    console.log(rest);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ?
                children : <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
        }
        ></Route>
    )
}

export default PrivateRoute
