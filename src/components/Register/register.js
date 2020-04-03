import React from 'react';
import ActionBar from '../ActionBar/actionbar'

const Register =({match}) =>{

    console.log(match)

    const styles = {
        content :{
            // backgroundColor: 'red',
            width: '100%',
            // padding: '8%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            paddingTop: '3%',
            paddingLeft: '2%'
           
        },
        form:{
            width: '80%',
            margin: '0 auto', 
        },
        profile:{
            width: '200px',
            height: '200px',
            backgroundColor: '#ccc'
        }

    }

    // const {userInput,setUserInput } = useState({});
    const data = {};

    function sendInfo(event){

        fetch('http://localhost:8080/register',{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
               'content-type': 'application/json' 
            }
        })
        .then(passed =>{
            alert('Student Successfully Registered');
        }).catch(error =>{
            alert('Sorry an error Occured, try again later');
        })
    }

    function userTyping(event){
        console.log(event.target.name);
      if(`${event.target.name}` === "firstName")        
            data.firstname =  event.target.value 
      
      
      if(event.target.name === "lastName")
            data.lastname =  event.target.value ;
    
   if(event.target.name === "department")
            data.department =  event.target.value; 
      
        console.log(data);
    }

    function imageSelected(event){
        // alert(event.target.files[0].path);
        console.log(event.target.files[0]);
        // let image = new Image();

    }

    return(
     <div className="d-flex">
        <ActionBar active={match.path} />
        <div style={styles.content} >

        <div className="col-md-3">
            <h5> Select a profile photo</h5>
            <div className="pt-5 pb-5 rounded-circle mt-1 mb-3 profile" style={styles.profile}>
            </div>
            <input type="file" onChange ={imageSelected} accept="image/*" />
        </div>

        <div style={styles.form} className="w-50 h-75">
  <div className="form-row">
    <div className="form-group col-md-12">
      <label >First Name</label>
      <input type="text" className="form-control" onChange={userTyping} id="FirstName" name="firstName" placeholder="First Name"/>
    </div>
    </div>

    <div className="form-row">
    <div className="form-group col-md-12">
      <label for="inputPassword4">Last Name</label>
      <input type="text" className="form-control" onChange={userTyping} id="lastName" name="lastName" placeholder="Last Name"/>
    </div>
  </div>

<div className="form-row">
   
    <div className="form-group col-md-12">
      <label for="inputState">Gender</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>Male</option>
        <option>FeMale</option>
      </select>
    </div>
   
  </div>

    <div class="form-row">
        <div className="form-group col-md-12">
            <label for="inputAddress">Department</label>
            <input type="text" className="form-control" id="inputAddress" onChange={userTyping} name="department" placeholder="Full Stack Web Developmet"/>
         </div>  
    </div>
  
 
   <button type="button" onClick={sendInfo} className="btn btn-primary pr-5 pl-5 pt-2 pb-2">Register</button>
 
 
</div>

      

        </div>

     </div>   
    )
}

export default Register;