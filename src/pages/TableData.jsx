import React, { useState } from 'react'
import './formdetails.css'
function TableData() {
    const [loaceData, setLocalDat] = useState(JSON.parse(localStorage.getItem("userdetails")))
    const [userData, setUserData] = useState([loaceData])
    const [search, setSearch] = useState("")
    const handleChange = (e) => {
        let value = e.target.value;
        setSearch(value)
    }
    const searchData = (value) => {
        let filterdata = value?.toLowerCase()?.includes(search?.toLowerCase())
        return filterdata
    }
    const filtteruserData = userData.filter((data) => {
        if (search === "") return data
        else if (searchData(data.name) || searchData(data.email)) return data
    })

    return (
        <div>
            <input type="text" value={search} onChange={handleChange} placeholder='Search...' />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Sex</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>GovtId</th>
                    <th>Guardian Deatils</th>
                    <th>Nationality</th>
                </tr>
                {filtteruserData?.map((data) =>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.gender}</td>
                        <td>{data?.mobile}</td>
                        <td>{data.address}</td>
                        <td>{data.govtId}</td>
                        <td>{data.guardan}</td>
                        <td>{"India"}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default TableData
