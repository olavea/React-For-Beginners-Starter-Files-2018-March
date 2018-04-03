import React from 'react';
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    

    myInput = React.createRef();


    goToStore = event => {
      //1
      event.preventDefault();
      //2
      console.log(this);

      //3
    };




    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
              <h2>Please Enter A Store</h2>
              <input 
                type="text" 
                ref={this.myInput}
                required 
                placeholder="Store Name" 
                defaultValue ={getFunName()} 
                />
              <button type="submit">Visit Store →</button>
        
            </form>
        );
    };
  };

//   constructor() {
//     super();
//     this.goToStore
    //I am not kidding. This is a little bit of a bummer

  export default StorePicker;
