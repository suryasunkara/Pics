import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
  state={cars:[]}
          /*using 2nd method(async/await) to get response from network and show*/
    onSubmit = async(val)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
      Authorization: 'Client-ID 3d3ee648a7411b7b55bef61963999d4d0162301aaccdacec93bcb5af1adc17e8'
    },
    params:{query:val}
  })
  this.setState({cars:response.data.results});  
  }

         /*using 1st method (promise/then) to get response from network and show*/
 // onSubmit(val){
  //   console.log(val,"sadsdsss")
  //   axios.get('https://api.unsplash.com/search/photos',
  //   {headers:{
  //     Authorization: 'Client-ID 3d3ee648a7411b7b55bef61963999d4d0162301aaccdacec93bcb5af1adc17e8'
  //   },
  //   params:{query:val}
  // }).then(response=>{
  //   console.log(response);
  // });
  // }
  render(){
  return (
    <div className="ui container">
    <SearchBar parentpickval={this.onSubmit}/>
    <ImageList images={this.state.cars}/>
    </div>
  );
}
  }
export default App;
