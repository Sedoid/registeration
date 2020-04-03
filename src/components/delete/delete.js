import React,{useEffect,useState} from 'react';
import ActionBar from '../ActionBar/actionbar';
import StudentTab from '../studentTab/studentTab';

const Delete =({match}) =>{
    console.log(match)

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
            <h3>Delete: Remove a studen from the list</h3>
        {
            list.accounts.map((student,index) => <StudentTab key={index} id={index}  student={student} /> )
        }
        </div>
        </div>   
            
    
    )}

export default Delete;