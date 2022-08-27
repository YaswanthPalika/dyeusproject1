import { Component } from "react";
import './index.css'
import {AiOutlineRight} from "react-icons/ai"
import {FiTwitter,FiFacebook,FiMail} from "react-icons/fi"

class Page8 extends Component{
    render(){
        return (
            <div className="page8">
                <div className="page8-card1">
                    <p className="p81">
                    With Diana, you’re in control of 
                    your health, your every day, and 
                    your story.
                    </p>
                </div>
                <div className="page8-card2">
                    <div className="follow-div">
                        <FiFacebook className="follow-icon"/>
                        <FiTwitter className="follow-icon"/>
                    </div>
                    <div className="p82" >
                        <p>Products <AiOutlineRight/></p>
                        <p>Our science <AiOutlineRight/></p>
                        <p>Vision & Mission <AiOutlineRight/></p>
                        <p>About Us <AiOutlineRight/> 
                        <br/>
                        <br/>
                        <hr/>
                        
                        <span className="subscribe-p">
                        Subscribe to our Newsletter</span>
                        </p>
                        <div className="email-input">
                            <input
                             className="email-input-box"
                             placeholder="Enter your email..."
                             />
                            <button alt="email"
                            className="activate-button">
                                <FiMail/> Activate
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Page8