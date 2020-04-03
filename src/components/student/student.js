import React from 'react';

const Student = (probs) => {
   
    const data ={
        firstname: probs.student.firstname,
        lastname: probs.student.lastName,
        department: probs.student.department,
    };

    function userTyping(event){
        console.log('He is writing something');
       data[event.target.name] = event.target.value;

    }

    function updateInfo(event){
        console.log('Updating the information');
        console.log('New Information');
        console.log(data);
        fetch('/update',{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
               'content-type': 'application/json' 
            }
        })
        .then(passed =>{
            alert('Student Successfully Registered');
        })
    }


    const styles = {
        general:{
            border: '1px solid #ccc',
            textAlign: 'left'
        },
        profile:{
            width: '100px',
            height: '100px'
        } ,
        detail:{
            position: 'relative',
            top : '30px'
        },
        input:{
            borderRadius: "5px",
        }

    }
    return(
        <div className="row  pt-3 pb-3 mb-2 pl-3" style={styles.general}>
        <div className="pt-3 pb-3  rounded-circle bg-primary mr-3" style={styles.profile}>
           
        </div>
        <details style = {styles.detail}>
    <summary> <strong>{probs.student.firstname} {probs.student.lastname}</strong> </summary>
    <br />
    <input placeholder = {probs.student.firstname} name = "firstname" className="mr-3" onChange={userTyping} style={styles.input} />
    <input placeholder = {probs.student.lastname} name = "lastname" className="mr-3" onChange={userTyping} style={styles.input}/>
    <input placeholder = {probs.student.department} name="department" className="mr-3" onChange={userTyping} style={styles.input}/>
    
            <button class="btn btn-primary" onClick={updateInfo} >Save Changes</button>
        </details>

        </div>
    )
}

export default Student;