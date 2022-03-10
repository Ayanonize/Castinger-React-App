import axios from 'axios'
import React, { Component } from 'react'
import NewsItems from '../components/NewsItems';
import Spinner from '../components/Spinner';


export default class News extends Component {



    constructor() {
        super();
        this.state = {
            Articles: [],
            Search: '',
            Message: 'Top News',
            Loading: false
        }
    }

    componentDidMount() {
        let articles = []
        var self = this;
        this.setState({ Loading: true })
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.props.ApiKey)
            .then(function (res) {
                articles = res.data.articles;
                console.log(articles);
                self.setState({ Articles: articles, Loading: false })


            }).catch(function (err) {
                self.setState({ Message: " Internal Server Error", Loading: false })
            })
    }


    render() {

        const handelsearch = (e) => {
            e.preventDefault();
            if (this.state.Search) {
                this.setState({ Loading: true })

                let articles = []
                var self = this;
                axios.get('https://newsapi.org/v2/everything?q=' + this.state.Search + '&apiKey=' + this.props.ApiKey)
                    .then(function (res) {
                        articles = res.data.articles;
                        console.log(articles);
                        self.setState({ Articles: articles, Loading: false })
                    })

                this.setState({ Message: "Your Search Results" })
            }
        }

        return (
            <>

                <h1 className='text-center text-white'>{this.state.Message}</h1>

                <div>
                    <form className="m-5 d-flex" onSubmit={handelsearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={this.state.Search} onChange={(e) => { this.setState({ Search: e.target.value }) }} />
                        <button className="btn btn-info mx-1">Search</button>
                        <button className="btn btn-info mx-1" onClick={() => { this.setState({ Search: "" }) }}>Clear</button>
                    </form>
                </div>


                {this.state.Loading &&

                    <Spinner></Spinner>

                }


                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 m-5 m-auto">
                    {this.state.Articles.map((e) => {
                        return (<><NewsItems data={e} /></>)
                    })}
                </div>
            </>
        )
    }
}
