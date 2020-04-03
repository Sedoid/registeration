import React from 'react';
import {Link} from 'react-router-dom';

const ActionBar =(props) =>{

    const styles = {
        actionBar:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#6c757d',
            height: '100vh',
            width: '10vw',
            minWidth: '300px',
           
        },

        button:{
            width: '10vw',
            minWidth: '300px',
            padding: '20px',
            fontSize: '17px',
            borderRadius: '0',
            borderBottom: '1px solid white',
        }
    }

    let tabs = ['register','update','delete'];
    let index = 0;

    tabs.forEach(tab =>{
        let pattern = new RegExp(`${tab}`,'g');
        console.log(tab);
        console.log(pattern.test(props.active));

        if(pattern.test(tab))
          {
               tabs[index] = "btn btn-primary";       
          } 
        
        index++;
    })
  
    return(
            <div style={styles.actionBar}>

            <Link to="register">
                <button style={styles.button} name="first" className={tabs[0]}> Register </button>
            </Link>

            <Link to ="update">
                <button style={styles.button} name="second" className={tabs[1]}> Update </button>
            </Link>

            <Link to="delete">
                <button style={styles.button} name="thired" className={tabs[2]}> Delete </button>
            </Link>
          
    
        </div> 
       
    )
}

export default ActionBar;