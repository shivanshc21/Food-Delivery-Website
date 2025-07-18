import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext.jsx';
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets.js';

const MyOrders = () => {

    const [data, setData] = useState([]);
    const {url,token} = useContext(StoreContext);

    const fetchOrders = async() => {
        const res = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
        setData(res.data.data);
    }

    useEffect(()=>{
        if (token){
            fetchOrders()
        }
    },[token])

  return (
    <div className='myorders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return(
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item,index)=>{
                            if (index===order.items.length-1){
                                return (item.name+" x "+item.quantity)
                            }
                            else{
                                return (item.name+" x "+item.quantity+", ")
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default MyOrders
