import React from 'react'
import { useState } from 'react'

export default function Percentage() {

    const [Obtained, setObtained] = useState('');
    const [From, setFrom] = useState('');

    const ShowPercentage = (num, per) => {
        if (num && per) {
            return (" - " + ((100 / per) * num).toFixed(2) + "%")
        }
    }

    return (
        <>


            <div className="card bg-secondary text-white my-5 p-5">
                <h1 className=' text-center'><b>Percentage Calculator</b> </h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Number Obtained</label>
                        <input type="text" className="form-control" value={Obtained} onChange={(e) => { setObtained(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">From</label>
                        <input type="text" className="form-control" value={From} onChange={(e) => { setFrom(e.target.value) }} />
                    </div>

                    <h2 className="text-center">Your Percentage {ShowPercentage(Obtained, From)}</h2>

                </form>
            </div>
        </>
    )
}
