import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'


const Update = () => {
    const { id } = useParams()
    const users = useSelector((state) => state.user)
    const existingUser = users.filter(f => f.id == id)
    const { name, email } = existingUser[0]
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleUpdate(e){
        e.preventDefault();
        dispatch(updateUser({
            id:id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
                <div className='w-100 border bg-secondary text-white p-5'>
                    <h3>Update User</h3>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input type="text" name="name" className='form-control' placeholder='Enter your name' value={uname} onChange={e =>setName(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="email" className='form-control' placeholder='Enter your email' value={uemail} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <button type='submit' className='btn btn-info'>Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update