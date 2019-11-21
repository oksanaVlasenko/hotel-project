import React, { createContext } from 'react';

const Context = createContext({
  city: '',
  updateCity: () => {},
  startDate: new Date(),
  endDate: new Date(),
  updateCoord: () => {},
});

export class UserProvider extends React.Component {
  updateCity = newCity => {
    this.setState({ city: newCity });
  };
  
  handleChangeStart = (date) => {
      this.setState ({startDate: date});
  }

  handleChangeEnd = (date) => {
      this.setState ({endDate: date});
  }
  
  state = {
    city: '',
    updateCity: this.updateCity,
    startDate: new Date(),
    endDate: new Date(),
    handleChangeStart: this.handleChangeStart,
    handleChangeEnd: this.handleChangeEnd
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const UserConsumer = Context.Consumer;