import { Component } from "react";
import './index.css'

class Page6 extends Component{
    render(){
        return (
            
            <div >
                <div className="page6">
                    <div className="page6-para">
                    <h1 className="h61">Consult with wellness experts</h1>
                    <p className="p61">Set up health consultations with
                        experienced doctors and therapists on our
                        app. Simply select a service, answer a few
                        questions, and we'll connect you to
                        someone who is the right-fit for you.</p>
                    </div>
                    <div>
                            <button className="get-button">
                            Get a consultation
                            </button>
                        </div>
                </div>
                
                    <img alt="doctor" className="doctor" 
                       src="https://res.cloudinary.com/doaejwdmk/image/upload/v1661350637/doctor_iost3j.png" />
                     
            </div>
        )
    }
}

export default Page6;