import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom'

const Welcome =() =>{

    const styles = {
        button:{
            padding: '10px',
            borderRadius: '5px',
            fontSize: '16px',
            border: '2px solid #ccc',
        },
        image:{
            width: "250px",
            height: '250px',
          }
    }
    return(

        <div className="App">
                
                <img style={styles.image} src={logo} alt="welcome logo" />
            <>
            <h1> Welcome to School Registeration Website</h1>

            <p> An online platform to manage student information of Seven Advanced Academy</p>

                <Link to="register">
                    <button style ={styles.button}> Get Started </button>
                </Link>
                    
            </>
        </div>
    )
}

export default Welcome;