import React from 'react';

const StudentTab =(props) =>{

    function removeStudent(event){

        fetch('/delete',{
            method:'POST',
            body: JSON.stringify({id : props.index}),
            headers:{
               'content-type': 'application/json' 
            }
        })
        .then(passed =>{
            alert('Student Successfully Deleted');
        })

    }

    const styles= {
        profile:{
            width: '100px',
            height: '100px',
            display: 'inline-block'
        },
        detail:{
            position: 'relative',
            top : '30px'
        },
        button:{
            height: '50px',
            position: 'relative',
            top : '30px'
        }
    }
    return(
        <>
        <div className="row  pt-3 pb-3 mb-2 pl-3 d-flex justify-content-between" >
        <div className="d-flex">
            <div className="pt-3 pb-3 rounded-circle bg-primary mr-3" style={styles.profile} >
           
            </div>
            <summary style={styles.detail}> <strong>{props.student.firstname} {props.student.lastname}</strong> </summary>
        </div>


        <button class="btn btn-danger" onClick={removeStudent} style={styles.button}>Remove Student</button>
       
        </div>
        <hr />
        </>
    )
}

export default StudentTab;