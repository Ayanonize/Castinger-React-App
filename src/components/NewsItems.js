import React, { Component } from 'react'

export default class NewsItems extends Component {

    render() {
        return (
            <div className="col my-3">
                <div className="card border-0 w-full">
                    <img src={!this.props.data.urlToImage ? "https://www.seekpng.com/png/small/370-3703355_empty-folder-image-showing-no-results-were-found.png" : this.props.data.urlToImage} className="card-img-top border-info" style={{ height: "200px", objectFit: "cover", borderBottom: "solid" }} alt="..." />
                    <div className="card-body" style={{ height: "200px", overflow: "auto" }}>
                        <h5 className="card-title">{this.props.data.title}</h5>
                        <p className="card-text">{this.props.data.description}</p>
                    </div>
                    <a href={this.props.data.url} target="_blank" className="btn btn-outline-info">More Details</a>
                </div>
            </div>
        )
    }
}
