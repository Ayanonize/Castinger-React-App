import React from 'react'


export default function Contact() {
    return (

        <>



            <div className="card p-4">



                <h1 className='text-dark text-center'>Say Hellow!</h1>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label text-dark">Name</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-dark">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label text-dark">Message</label>
                        <textarea type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" rows="5" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>



            </div>
        </>

    )
}
