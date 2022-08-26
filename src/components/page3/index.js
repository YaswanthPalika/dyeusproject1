import { Component } from "react";
import './index.css'

class Page3 extends Component{
    render(){
        return (
            <div className="page3">
                <div className="page3-para">
                    <h3 className="h31">Liberate your everyday wellness</h3>
                    <h1 className="h32">Shop our self-care
                        products</h1>
                    <p className="p31">Gentle formulations thoughtfully engineered
                        by Specialist researchers on doctors to
                        simplify your self-core and get results fast.
                        And, we always list our ingredients - so what
                        you see is what you get.</p>
                </div>
                    <div>
                        <button className="upgrade-button">
                            Upgrade your self-care
                        </button>
                    </div>
                    <p className="p32">#NoNasties, We promise!</p>
                    <img alt="serum" className="serum" 
                       src="https://res.cloudinary.com/doaejwdmk/image/upload/v1661350640/serum_v87qlv.png" />
                       
            </div>
        )
    }
}

export default Page3;