import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Link
  } from 'react-router-dom'
import { UserConsumer } from '../components/Context';

class FormCity extends React.Component {

    handleSubmit = (event) => {
        console.log('Success');
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <UserConsumer>
                    {({ updateCity, city, startDate, endDate, handleChangeEnd, handleChangeStart}) => {
                        return (
                        <div className="row justify-content-center">
                        <div className="form-group">
                            <form onSubmit={this.handleSubmit} className="column ">
                                    <div className="d-flex  justify-content-center flex-wrap">
                                        <label>
                                            <input className="form-control-sm" type="text" placeholder={'Search City'}
                                            value={city || ''}  onChange={event => {
                                                updateCity(event.target.value)
                                            }} />
                                        </label>
                                    </div>
                                    <div className="d-flex flex-row justify-content-center flex-wrap" >
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
                                    <div className="d-flex flex-row justify-content-between">
                                        <input type="submit" value="Submit" className=" btn btn-primary btn-sm"/>
                                        <Link to='/form'><button className="btn btn-primary active btn-sm">Go ahead...</button></Link>
                                    </div>
                            </form>   
                        </div>     
                    </div>
                    )}}
                </UserConsumer>
            </div>
            )}
}

export default FormCity