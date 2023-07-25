import React,{ useState }  from 'react'
import "./UserEvents.css"
import NavCandidate from '../../../Components/NavCandidate';

function EnrolledCourses(){
    
    const[events,setEvents]=useState([]);

    
    if(events.length===0){
        return(
           
            <div>
            <div className="sa-enrolled">
            <h2 className="sa-en">No Events added!</h2>
            </div>
            </div>
        );
    }
    else{
    return(
        <>

<div>
     <div className="sa-enrolled">
        Events
        </div>
        </div>


    </>
    );
}
}

export default EnrolledCourses