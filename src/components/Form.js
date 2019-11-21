import React from 'react';
import Hotel from './Hotel';
import { UserConsumer } from '../components/Context';
 
class Form extends React.Component{
  render() {
     return (
        <div>
            <UserConsumer>
               {({city}) => {
                  return (
                  <div className="jumbotron"> 
                     <Hotel city={city}/>
                  </div>
                  )
               }}
            </UserConsumer>  
        </div>
     )}
}  

export default Form