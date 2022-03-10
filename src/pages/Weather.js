import axios from 'axios';
import React, { Component } from 'react'
import Spinner from '../components/Spinner';


export default class Weather extends Component {


    constructor() {
        super();
        this.state = {
            mydata: {},
            icondata: {},
            Loading: false,
        }
    }


    componentDidMount() {
        this.setState({ Loading: true })
        let raw_data = {};
        let raw_data2 = {};
        var self = this;
        axios.get('http://api.weatherapi.com/v1/current.json?key=600acbc85ebc423995f43520220803&q=india,rajasthan,jaipur&aqi=no').then(function (response) {

            raw_data = response.data.current;
            raw_data2 = response.data.current.condition;

            self.setState({ mydata: raw_data, icondata: raw_data2 })
            console.log(response)
            // console.log(self.state.mydata)
            self.setState({ Loading: false })


        })
    }


    render() {
        return (
            <>
                <div className='my-4'>
                    <div className='bg-secondary p-4'>
                        <div>
                            <img src={this.state.icondata.icon} alt="" />
                        </div>
                        {this.state.Loading && <Spinner></Spinner>
                        }
                        <div className="text-white">

                            <div>
                                <h1>{this.state.icondata.text}</h1>
                            </div>

                            <div>
                                <h1>Temperature - {this.state.mydata.temp_c}°C</h1>

                            </div>

                            <div className="d-flex">
                                <h1>Humidity - </h1>
                                <h1 className='mx-3'>{this.state.mydata.humidity}</h1>

                            </div>

                            <div className="d-flex">
                                <h1>Wind - </h1>
                                <h1 className='mx-3'>{this.state.mydata.wind_kph} KPH</h1>

                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
