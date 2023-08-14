import React, { useEffect } from 'react'
import { getAllCustomers } from '../services/custservice'

function CustomerList() {

    useEffect(()=>{
        getAllCustomers()
        .then(data => console.log(data))
    })

  return (
    <div>
        <h2>
        Customer List
        </h2>
    </div>
  )
}

export default CustomerList