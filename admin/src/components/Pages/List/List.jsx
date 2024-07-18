/*import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import{toast} from "react-toastify"

const List = ({url}) => {


  const [list,setList] = useState([]);

  const fetchList = async ()=> {
    const response = await axios.get(`${url}/api/food/list`);

    if(response.data.success) {
      setList(response.data.data)
    }
    else
    {
      toast.error("Error")
    }
  }

const removeFood = async(foodId) => {
  const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
  await fetchList();
  if(response.data.success) {
    toast.success(response.data.message)
  }
  else {
    toast.error("Error");
  }
}

  useEffect(()=>{
  fetchList();
},[])
  return (
    <div className='list add flex-col'>
      <p>All Foods List</p> 
      <div className="list-table">
        <div className="list-table-format title">
<b>Imsge</b>
<b>Name</b>
<b>Category</b>
<b>Price</b>
<b>Action</b>
          </div>
          {list.map((item,index)=>{
            return (
              <div key={index} className='list-table-format'> 
              <img src={`${url}/images/`+item.image} alt=''/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>x</p>
              </div>
            )
          })}
        </div>     
    </div>
  )
}

export default List   og wala hai eyeh */

/// isme dialogbox add kar rhae ki remove button pe ok

import React, { useEffect, useState } from 'react';
import './List.css';
import axios from "axios";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert"; // Import confirmAlert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const List = ({ url }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  }

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  }

  const handleRemoveFoodClick = (foodId) => {
    confirmAlert({
      title: "Confirm to remove",
      message: "Are you sure you want to remove this food item?",
      buttons: [
        {
          label: "Yes",
          onClick: () => removeFood(foodId),
        },
        {
          label: "No",
        },
      ],
    });
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/` + item.image} alt='' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={() => handleRemoveFoodClick(item._id)} className='cursor'>x</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List;


