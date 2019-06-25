import React from 'react';


class SearchBar extends React.Component{
state = {inputval:"",likes:""};
handleOnSubmit(e){
  console.log("hello");
  e.preventDefault();
  this.props.parentpickval(this.state.inputval)
}

  render(){
  return (
    <div className="ui segment">
    <form className="ui form"
    onSubmit={this.handleOnSubmit.bind(this)}>
    <div className="field">
    <label>Search:</label> 
  <input type="text" 
  value={this.state.inputval} 
  onChange={ e =>this.setState({inputval:e.target.value})} 
  placeholder="Seeearch..."/>
</div>
</form>
</div>
  );
}
  }
export default SearchBar;
