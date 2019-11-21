import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import FormCity from './FormCity';

class Home extends React.Component {
   
    render() { 
      return (
        <div className="jumbotron ">     
          <h3 className="display-9" style={{textAlign: 'center'}}>Only the best hotel for you!</h3>
          <p style={{textAlign: 'center'}}>You need to type city name for searching top of the best hotels. <br /> 
          Enjoy...</p>
          <FormCity />
        </div>  
      );
    }
  } 

export default Home;