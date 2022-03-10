import React from 'react'

export default function About() {
    return (
        <>



            <div class="card" style={{ width: "18rem" }}>
                <img src="https://pbs.twimg.com/profile_images/1481905318942867457/J0ylsqPq_400x400.jpg" class="card-img-top" alt="..." style={{ height: "250px", objectFit: "cover" }} />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

        </>

    )
}
