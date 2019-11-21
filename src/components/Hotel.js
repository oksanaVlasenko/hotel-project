import React from 'react';
import Weather from './Weather';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserConsumer } from '../components/Context';

class Hotel extends React.Component {
   constructor(props){
       super(props);
       this.state = {
        town: this.props.city,
        hotel: []
      }
   }
  
   componentDidMount = () => {
            fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=${this.state.town}&lang=en&lookFor=hotel&limit=10`)
                .then(res => res.json())
                .then(data => {
                    const hotels = data.results.hotels;
                    this.setState({hotel: hotels});
                })
                .catch(error => console.log('error', error));
    }

   handleSubmit = (event) => {
        console.log('success')
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <UserConsumer>
                 {({city, updateCity, startDate, endDate, handleChangeEnd, handleChangeStart}) => {
                     return (
                        <div>
                            <div className="card bg-secondary mb-3">
                            <form onSubmit={this.handleSubmit} 
                                className="column ">
                                <div className="d-flex flex-row justify-content-around flex-wrap " 
                                style={{marginTop: '0.6em'}}>
                                    <label>
                                        <input className="form-control-sm" 
                                        type="text" placeholder={'Search City'}
                                        value={city} onChange={event => {
                                            updateCity(event.target.value)
                                        }} 
                                    />
                                    </label>
                                    
                                    <label>
                                        <DatePicker
                                        selected={startDate}
                                        onChange={date => handleChangeStart(date)}
                                        dateFormat="d.M.yyyy"
                                        className="form-control-sm"
                                        />
                                    </label>
                                    <label>
                                        <DatePicker
                                        selected={endDate}
                                        onChange={date => handleChangeEnd(date)}
                                        dateFormat="d.M.yyyy"
                                        className="form-control-sm"
                                        />
                                    </label>
                                </div>
                            </form>
                            </div>
                            <div>
                                <div className="">
                                {this.state.hotel.map(hotels => {
                                    return <div className="flex-wrap card bg-secondary mb-3 align-items-lg-center d-flex flex-row justify-content-between" 
                                            key={hotels.id}>
                                    <div className="d-flex flex-column " style={{marginLeft: '2em'}}>
                                        <h4>{hotels.label}</h4>
                                        <Weather city={city}/>
                                    </div>
                                    <img className="col-12 col-md-8 col-sm-12 col-lg-4 mb-9 card-img-top" 
                                        src={`https://photo.hotellook.com/image_v2/crop/h${hotels.id}_1/800/520.auto`}
                                        alt="hotel poster"
                                        style={{margin: '0.5em'}}/>
                                    </div>
                                })} 
                                </div> 
                            </div>
                        </div>
                    )}}
                 </UserConsumer>
            </div>
        )}

}

export default Hotel