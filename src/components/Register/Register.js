import React from 'react';

const Register = ({onProstateChange}) => {
  return (

  	<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center">
<main className="pa4 black-80 ">

  <div className="measure" >

    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">

      <legend className="f1 fw6 ph0 mh0">Register Yourself</legend>

      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="namehtmlFor">Name</label>
		<input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
      </div> 


      <div className="mt3">
      	<label className="db fw6 lh-copy f6" htmlFor="namehtmlFor">Email</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="Email" name="Email" id="Email"  required/>
      </div>


      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="Password" name="Password"  id="Password"/>
      </div>

    </fieldset>
    <div className="center">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6  dib" type="submit" value="Sign in" onClick={()=>{onProstateChange('home')}}/>
    </div>
  </div>
</main>
</article>
)
}

export default Register;