import React from 'react'
import { useState } from 'react'
import Alerts from '../components/Alerts';

export default function JoinOurTeam() {

    const [Name, setName] = useState('');
    const [Message, setMessage] = useState('');
    const [Alert, setAlert] = useState(false);



    const handelsubmit = (e) => {
        e.preventDefault();
        if (Name && Message) {
            localStorage.setItem('name', Name)
            localStorage.setItem('message', Message)
            setAlert(true)

        }
    }

    return (
        <>
            {Alert && <Alerts theme="alert-success" title="Success!" desc="Your Name And Messages Have Been Updated Go Back To Home To See The Changes"></Alerts>}
            <form className=' text-light bg-secondary p-5' onSubmit={handelsubmit}>
                <h1 className='text-center'>Settings</h1>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Name</label>
                    <input type="text" class="form-control" value={Name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Message</label>
                    <textarea type="text" class="form-control" rows="5" value={Message} onChange={(e) => { setMessage(e.target.value) }} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
