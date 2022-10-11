import React ,{Component}from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/imageLinkForm/imageLinkForm';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

// const app = new Clarifai.App({
//  apiKey: 'cf82f5ed68b94bf0941c115a892e689f'
// });

class App extends Component{
	constructor(){
		super();
		this.state={
			input:'',
			imageUrl:'',
			box:{},
			prostate: 'SignIn',
			isSignedIn:false
		}
	}


	calculateFaceLocation=(res)=>{
		const clarifaiFace= res.outputs[0].data.regions[0].region_info.bounding_box;
		const image=document.getElementById("inputimage")
		const height=Number(image.height);
		const width=Number(image.width);
		
		return{
			leftCol: clarifaiFace.left_col  * width,
			topRow: clarifaiFace.top_row *height,
			rightCol : width - (clarifaiFace.right_col *width),
			bottomRow: height - (clarifaiFace.bottom_row *height)
			}
	}

	displayFaceBox=(box)=>{
		console.log(box)
		this.setState({box: box})
	}
	onInputChange=(event)=>{

		this.setState({input:event.target.value})
	}
   onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
      fetch('http://localhost:3000/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            input: this.state.input
        })
      })
    .then(response => response.json())
    .then( response => {
      if (response) {
        fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.user.id
            })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count}))
        })
        .catch(console.log)
    }
    this.displayFaceBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err));
  }

  // YAHA PAR CHANGES KIYE H https://github.com/LadyShinka/facerecognition/blob/master/src/App.js
  // ISKA DEKH KAR KIYE H EK BAAR DEKHLE ...YE NICHE WALA MERA H

	// onButtonSubmit=()=>{
	// 	this.setState({imageUrl:this.state.input})
	// 	console.log('CHILAXXXXXXXX');//index.js file
	// 	console.log(this.state.imageUrl)
	// 	app.models
 //      .predict(
 //    // .predict(, this.state.input)
 //    // to:
 //    // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
 //        Clarifai.FACE_DETECT_MODEL,this.state.input).then(response=>
 //      	this.displayFaceBox(this.calculateFaceLocation(response)))
 //      	.catch(err=>{console.log('hell',err)})
      	
 //      }
    onProstateChange=(route)=>{
    	if(route==='SignIn'){
    		this.setState({isSignedIn:false})
    	}
    	else if(route==='home'){
    		this.setState({isSignedIn:true})
    	}
    	this.setState({prostate:route})

    }
	render(){
	// We can destructure and remove this.state from the statement
	//  const {imageUrl,prostate,box}=this.state
	//  now we can remove this.state ...from above keywords
	return (

		<div className="App">
	     <Navigation isSignedIn={this.state.isSignedIn} onProstateChange={this.onProstateChange} />
	     {this.state.prostate==="home" ?				
	     	 <div>
			 <Logo />
			 <Rank />
			 <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
			 <FaceRecognition  imageUrl={this.state.imageUrl} box={this.state.box}/>
			 </div>
			 :
			 (this.state.prostate==="SignIn"?
			 <SignIn onProstateChange={this.onProstateChange}/>:
	     	<Register onProstateChange={this.onProstateChange}/>
	     	)
	     }
	    
		
		 </div>
		);
	}	     	 
}
export default App;
