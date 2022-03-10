import React from 'react'

export default function Home() {
    return (
        <>
            {/* image slider */}
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." style={{ height: "80vh", objectFit: "cover" }} />
                        <div className="carousel-caption d-none d-md-block" style={{ background: "black", borderRadius: "60px", opacity: " 90%" }}>
                            <h5>Castinger</h5>
                            <p>We Will help You with our weather and news service</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80" className="d-block w-100" alt="..." style={{ height: "80vh", objectFit: "cover" }} />
                        <div className="carousel-caption d-none d-md-block" style={{ background: "black", borderRadius: "60px", opacity: " 90%" }}>
                            <h5>Castinger</h5>
                            <p>We Will help You with our weather and news service</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." style={{ height: "80vh", objectFit: "cover" }} />
                        <div className="carousel-caption d-none d-md-block" style={{ background: "black", borderRadius: "60px", opacity: " 90%" }}>
                            <h5>Castinger</h5>
                            <p>We Will help You with our weather and news service</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* image slider */}

            {/* Features */}
            <div className='m-1 my-5'>
                <div className="alert alert-info p-4 text-break" role="alert">
                    <h4 className="alert-heading"><strong>Hellow, {localStorage.getItem('name') ? localStorage.name : "anonymous"}!</strong> </h4>
                    <p><strong>{localStorage.message}</strong> </p>
                    <hr />
                    <strong className="mb-0">To update this value visit join our team page!</strong>
                </div>
            </div>

            {/* Features */}
            <div class="row mb-2">
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden bg-white border-0 flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">Featured post</h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="200" height="250" alt="" style={{ objectFit: "cover" }} />

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden bg-white border-0 flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-success">Design</strong>
                            <h3 class="mb-0">Post title</h3>
                            <div class="mb-1 text-muted">Nov 11</div>
                            <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="200" height="250" alt="" style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
