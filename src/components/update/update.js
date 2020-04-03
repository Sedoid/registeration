import React,{useState,useEffect} from 'react'
import ActionBar from '../ActionBar/actionbar';
import Student from '../student/student'

const Update =({match}) =>{
    
    const [list,setList] = useState(
        {
            accounts:[]
       }
    );
           
    useEffect(()=>{
    console.log('About to fetch the list ');
    fetchStudents();

    },[]);

    const fetchStudents = async() =>{

    await fetch('/update')
            .then((response) => {
                console.log(response);
                return response.json();
            }) 
            .then(result =>{
            console.log('...........Here are the results...........');
            console.log(result);
           setList(JSON.parse(result));
            console.log(list);
            })
    }

    
    return(
     <div className="d-flex">
     <ActionBar active={match.path}/>
     <div className="content pl-5 col-md-8 pt-4 ">
         <h3>Edit: List of Registered Students</h3>
        {
            list.accounts.map((student,index) => <Student key={index} id={index}  student={student} /> )
        }
     </div>
     </div>   
    )
}

export default Update;