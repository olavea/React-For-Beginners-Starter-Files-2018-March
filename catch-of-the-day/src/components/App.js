import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
    state = {
        fishes: {}, //empty object, could use string and... or...
        order: {} //empty object, use what you will end up using
    };
    addFish = (fish) => { // how do you get a fish into form
        this.setState   // takes in a fish. console.log("add a fish");





    };
      //1 take a copy of the existing state, non-mutation
      const fishes = { ...this.state.fishes};

      //2 add our new fish to that fishes variable
      fishes[`fish${Date.now()}`] = fish;


      //3 set the neew fishes object to state




      this.setState({
          fishes: fishes
      });
    };

        //pleaseUpdateThisPieceOfState
      console.log
    render() {
      return (
          <div className="catch-og-the-day">
            <div className="menu">
                <Header tagline="A Midsummer Night's Dream" />
            </div>
            <Inventory addFish={this.addFish} />
            <Order />
          </div>
      )
  }
}

export default App;

