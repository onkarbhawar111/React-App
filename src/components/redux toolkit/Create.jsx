import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './UserReducer'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const users = useSelector((state)=> state.user);
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
        navigate('/')
    }


    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-100 border bg-secondary text-white p-5'>
                <h3>Add New User</h3>
                <form>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" className='form-control' placeholder='Enter your name' onChange={(e)=> setName(e.target.value)} />
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" className='form-control' placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <br />
                    <button className='btn btn-info' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create