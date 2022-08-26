import { Component } from "react";
import './index.css'

class Page1 extends Component{
    render(){
        return (
            <div className="page-1">
                <h1 className="diana">About Diana</h1>
                <h3 className="platform">A platform that looks put for you</h3>
                <p className="p1">Dians empowers you to understand how
                    your body works so you can look ang feel
                    your best. <br/><br/></p>
                <hr className="hr1"/>
                <h2 className="heading1">Our Philosophy</h2>
                <h1 className="p2">Sustainable wellness
                    is a big-picture,
                    inside out approach
                    </h1>
                <p className="p3">Diana is on a mission to create
                    thoughtful, science-backed solutions
                    for women who want to make informed
                    decisions about their health and
                    wellness,
                    <br/><br/>
                    That's why we've created an integrated
                    ecosystem of</p>
                    
                    <div>
                        <img className="test-tube" alt="test-tube" src="https://res.cloudinary.com/doaejwdmk/image/upload/v1661350627/Screenshot__19_-removebg-preview_wvqzne.png"/>    
                    </div>
                    <p className="p4">
                    Consciously formulated products that deliver feel-good results fast
                    </p>
                    <div>
                        <img className="stars-image" alt="test-tube" src="https://res.cloudinary.com/doaejwdmk/image/upload/v1661350627/Screenshot__26_-removebg-preview_2_flaiqh.png"/>    
                    </div>
                    <p className="p4">In-app mood and period tracking options that help you cultivate a deeper
                        connection with your mind and body</p>
                    <div>
                        <img className="phone-image" alt="test-tube" src="https://res.cloudinary.com/doaejwdmk/image/upload/v1661350628/Screenshot__27_-removebg-preview_jiwyzd.png"/>    
                    </div>
                    <p className="p4">In-app consultation portals that connect
                        you with compassionate wellness experts
                        </p>
                        <p className="p5">
                        Consider us your nerdy ally who spends
                        their time perfecting products that work
                        because they want you to feel your best
                        everyday. 
                        </p>
                    
            </div>
        )
    }
}

export default Page1;