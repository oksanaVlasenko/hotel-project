import React from 'react';

class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      days: [],
      town: this.props.city,
      temp: ''
    }
  }
  
  componentDidMount = () => {
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.town}&lang=en&units=metric&APPID=652891bdee8d99f67f715fab1624d14e`)
            .then(res => res.json())
            .then(data => {
              const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
              this.setState({days: dailyData})
              const temp = dailyData.map((day) => day.main.temp);
              const totalTemp = temp.reduce((a,b) => a+b);
              const averageTemp = Math.ceil(totalTemp/5);
              this.setState({temp: averageTemp});
            })
            .catch(error => console.log('error', error));
  }

  render() {

    return (
      <div>
          <p>{this.state.temp} °C</p>
      </div>
    )
  }
}

export default Weather