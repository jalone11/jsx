import React from 'react';
import './App.css';
import cafe from './cafe.jpg'

function App() {
  return (
    <>
    <div style={{border:'solid 1px black',maxWidth: '100vw'}}>  
 
 <h1 className='title red'>Your name here</h1>  
     <br />  

       <img src={cafe}/> 
       <img src='./vue.jpg' />  
</div>   


    </>
  );
}

export default App;
