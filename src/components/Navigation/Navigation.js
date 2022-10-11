import React from 'react';
import 'tachyons';
const Navigation=({onProstateChange,isSignedIn})=>{
	if(isSignedIn){
	return (
		<div>
		<nav style={{display: 'flex' ,
		 justifyContent: 'flex-end'}}>
		<p className='pa3 link dim black underline pointer f3' onClick={()=>{onProstateChange('SignIn')}}>Sign Out</p>
		</nav>
		</div>
		);
}
else{
		return (
		<div>
		<nav style={{display: 'flex' ,
		justifyContent: 'flex-end'}}>
		<p className='pa3 link dim black underline pointer f3' onClick={()=>{onProstateChange('SignIn')}}>Sign In</p>
		<p className='pa3 link dim black underline pointer f3' onClick={()=>{onProstateChange('Register')}}>Register</p>
		</nav>
		</div>
		);
	}
}
export default Navigation;