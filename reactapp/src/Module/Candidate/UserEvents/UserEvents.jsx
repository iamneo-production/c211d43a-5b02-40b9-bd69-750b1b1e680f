import React,{ useState }  from 'react'
import "./UserEvents.css"

function EnrolledCourses(){
    
    const[events,setEvents]=useState([]);

    
    if(events.length===0){
        return(
            <div className="sa-enrolled">
            <h2 className="sa-en">No Events added!</h2>
            </div>
        );
    }
    else{
    return(
        <>


     <div className="sa-enrolled">Events</div>


    </>
    );
}
}

export default EnrolledCourses