
import { useState } from 'react'
import './Home.css'

function Home(){
    

            const[title,setTitle] = useState("");
            const[image,setImage] = useState("");            
    
    function getData(){

        fetch('https://randomuser.me/api/')
        .then((response) =>response.json())
        .then((json) => {
            setTitle(json.results[0].name.first)
            setImage(json.results[0].picture.medium)
        console.log(json.results)
        });
    }


    
    
    
    
    
    return (
        <>

        <div className='navbar' style={{cursor:"pointer"}}>
            <ul>
                <li><span className='fa fa-home'></span>Home</li>
                <li><span className='fa fa-image'></span>User Photos</li>
                <li><span className='fa fa-newspaper'></span>Documentation</li>
                <li><span className='fa fa-pencil-square'></span>Change Log</li>
                <li><span className='fa  fa-line-chart'></span>Stats & Graphs</li>
                <li><span className='fa fa-heart'></span>Donate</li>               
                <li><span className='fa fa-copyright '></span>Copyright</li>
            
            </ul>



        </div>






        <div className="upper">
        <h1 className="Header">Random User Generator</h1>
        <p className="HeaderPara"> A free, open-source API for generating random user data. Like Lorem Ipsum, but for people. </p>
        
        
                <div className='Center'>
                    <div className='ImageContainer'>
              
                        <img src={image} alt='Profile-Picture' />
                        
                        
                       
                    </div>

                <p className='profiledesc'> My Name is </p>
                <h1 className='profilename' >{title}</h1>
                
                    <div className='favicon'>
                    <span className='fa fa-envelope'></span>
                    <span className='fa fa-calendar'></span>
                    <span className='fa fa-map-marker'></span>
                    <span className='fa fa-phone'></span>
                    </div>

                
                

                </div>
        

       
            <button className='Button' onClick={getData}>Generate Another User</button> 
        
        </div>



        <h1 className='closingtag'>Thank you for helping us help you help us all</h1>
<p className='closingpara'>Found a bug or have an idea?<br></br>
Contribute to randomuser.me's database on our Github Repo.</p>
<br></br><br></br>
<h1 className='closingtag'>Contact Us</h1>
<p className='closingpara'>If you have any questions/feedback or would like to get in touch with us, tweet us @randomapi</p>


       




        </>
    )



}

export default Home