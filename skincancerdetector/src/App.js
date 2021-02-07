import './App.css';
import React, {Component } from 'react'
import { Result, Description, Title, Nav } from './elements';

class App  extends Component {
  constructor(props){
    super(props)
    this.state ={
        image: null

    }

    this.handleImageChange = this.handleImageChange.bind(this)
}

handleImageChange = (event) => {
  if(event.target.value === ''){
    alert("Image not found. Please try again.")
  }else{
  this.setState({
   image: URL.createObjectURL(event.target.files[0])
  })
}
  //document.getElementsByTagName("img").style.display = "hidden";
}


render(){
  return (

    <>
        <Nav>
    <Title>Skin Cancer Detector</Title>

   
    </Nav>

    <Description>
    Click the button below to input an image and we will tell you the result of whether you have skin cancer or not
</Description>

        
           

          <div class="file-group">
            <label for="file-input">Upload a picture&nbsp;&nbsp;</label>
           
            <input type="file" id="file-input" onChange = {this.handleImageChange}/> 
          </div>
     <br></br>
       
          <img id="image"  src={this.state.image}   />


      
<Result>
</Result>
    </>
  
    );}
}

export default App;
