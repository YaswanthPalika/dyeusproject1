import { Component } from "react";
import './index.css'

class Page4 extends Component{
    render(){
        return (
            <div className="page4">
                <div className="page4-para">
                    <h1 className="h41">Track your mood</h1>
                    
                    <p className="p41">All days and all moods are not made equal.
                        But we can only improve what we measure.
                        Track your mood and vitals (including skin
                        and hair health) so you can take better care
                        of yourself every day.</p>
                </div>
                    <div>
                        <button className="track-button">
                        Track you mood on the app
                        </button>
                    </div>
                    
                    <img alt="gallery" className="gallery" 
                       src="https://res.cloudinary.com/doaejwdmk/image/upload/v1661350641/gallery_yr4roy.png" />
                       
            </div>
        )
    }
}

export default Page4;