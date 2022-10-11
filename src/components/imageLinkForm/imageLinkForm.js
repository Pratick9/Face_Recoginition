import React from 'react';
import './imageLinkForm.css'
const ImageLinkForm=({onInputChange , onButtonSubmit})=>{
	return (
		<div >
			<p className='f3 tc tf'>{"This Magic Brain will detect faces in your pictures.Git it a try" }</p>
		<div className='center'>
		<div className='form center pa4 br3 shadow-5 '>
			<input className='f4 pa-2 w-70 center' type='text' onChange={onInputChange} />
			<button className='w-30 grow f4 link ph3 pv2 dib white b--none bg-light-purple ' onClick={onButtonSubmit}>Detect 
		</button>{/*pv: padding vertical , ph: padding horizontal*/}
			</div>
		</div>
	</div>
	);
}
export default ImageLinkForm;