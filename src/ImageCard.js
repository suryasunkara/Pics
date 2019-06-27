import React from 'react'
 class ImageCard extends React.Component{
   constructor(props){
     super(props)
     this.imageRefs=React.createRef();
     this.state={spans:""}
   }

   componentDidMount = () => {
     this.imageRefs.current.addEventListener('load',this.setSpan);
     
   }

   setSpan=()=>{
     const height=this.imageRefs.current.clientHeight;
     const span=Math.ceil(height/150);
     this.setState({spans:span})
   }
   
   render(){
     console.log(this.imageRefs.clientHeight,"jhiuh");
     debugger;
     const {description,urls} = this.props.image;
     return(
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
       <img ref={this.imageRefs} alt={description} src={urls.regular}></img>
      </div>
     )
   }
 }
 export default ImageCard;