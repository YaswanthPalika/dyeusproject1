import { Component } from "react";
import './index.css'
import {AiOutlineRight} from "react-icons/ai"

class Page7 extends Component{
    render(){
        return (
            <div className="page7">
                <div className="page7-para">
                    <h1 className="h71">Get your personalized
                        period box</h1>
                    
                         
                </div>
                <img alt="pms" 
                    className="pms"
                    src="https://res.cloudinary.com/doaejwdmk/image/upload/v1661350635/pms_potion_jzphho.png"/>
                <div className="page7-para">
                    <p className="p71">
                    Tailor your monthly box of organic period
                    products without the organic price tag (no
                    pink taxing here). Get it delivered to vour
                    doorstep in sustainable packaging ana
                    track your subscription on our app.
                    </p>
                </div>
                <button className="create-button">
                    <div className="create-button-content">
                        <p>Create your box on the app</p>
                        <AiOutlineRight/>
                    </div>
                </button>

            </div>
        )
    }
}

export default Page7