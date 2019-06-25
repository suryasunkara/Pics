import React from 'react';
import SearchBar from './SearchBar';


class App extends React.Component{
  onSubmit(val){
    console.log(val,"sadsdsss")
  }

  render(){
  return (
    <div className="ui container">
    <SearchBar parentpickval={this.onSubmit}/>
    </div>
  );
}
  }
export default App;
