import { Component } from "react";
import './index.css'

class Page5 extends Component{
    render(){
        return (
            
            <div >
                <div className="page5">
                    <div className="page5-para">
                    <h1 className="h51">Track your period</h1>
                    <p className="p51">Stay in the know with reliable Al-based and
                    science-backed period, ovulation, and PMS
                    predictions. The intuitive design makes
                    tracking your cycle effortless and helps you
                    stay on top of your monthly data.</p>
                    </div>
                    <div>
                            <button className="track-button">
                            Track you mood on the app
                            </button>
                        </div>
                </div>
                
                    <img alt="gallery" className="gallery" 
                       src="https://res.cloudinary.com/doaejwdmk/image/upload/v1661350637/calender_zjdpbc.png" />
                     
            </div>
        )
    }
}

export default Page5;