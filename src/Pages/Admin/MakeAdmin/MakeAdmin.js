import React, { useState } from 'react';
import './MakeAdmin.css';
import { Alert} from 'react-bootstrap';
import useAuth from './../../../hooks/useAuth';
const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    //Submit
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://salty-lake-71645.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div className='add-admin'>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>  
                <input type="email" className="pt-2 m-2 w-25" onChange={handleOnBlur} required='*' placeholder='Enter Your Email' /><br/>
                
                <input className="bg-warning mb-4 w-25" type="submit" value='Make An Admin' />
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;