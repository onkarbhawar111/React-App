import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Pagination(){
    const [apiData, setApiData] = useState([])
    // const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const indexOfLastItem = currentPage * rowsPerPage;
    const indexOfFirstItem = indexOfLastItem - rowsPerPage;
    const currentItems = apiData?.users?.slice(indexOfFirstItem, indexOfLastItem)
    const totalPages = Math.ceil(apiData.total/rowsPerPage);
    console.log(totalPages)

    function handlePrev(){
        setCurrentPage((prev) => prev - 1)
        // setCurrentPage((prev) => Math.min(prev-1, 1))
    }
    function handleNext(){
        // setCurrentPage((next) => next + 1)
        setCurrentPage((next) => Math.min(next+1, totalPages))

    }

    useEffect(()=>{
        axios.get('https://dummyjson.com/users?limit=0')
        .then((response)=> {
            console.log(response.data)
            setApiData(response.data)
        })
    }, [])



    return(
        <>
        <h2>Pagination</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>                
            </thead>
            <tbody>
                {
                    currentItems?.map((value, index) => {
                        return <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.username}</td>
                            <td>{value.email}</td>
                            <td>{value.age}</td>
                        </tr>
                    } )
                }
            </tbody>
        </table>
        <div>
            <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
            <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>
        </>
    )
}

export default Pagination