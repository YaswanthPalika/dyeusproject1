import { Component } from "react";
import './index.css'
import {AiOutlineMenu,AiOutlineBell} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'

import Page1 from '../page1'
import Page2 from '../page2'
import Page3 from '../page3'
import Page4 from '../page4'
import Page5 from '../page5'
import Page6 from "../page6"
import Page7 from "../page7";


class About extends Component{
    render(){
        return (
            <div>
                <div className="navbar">
                        <div>
                            <button className="nav-button">
                                <AiOutlineMenu className="nav-items1"/>
                            </button>
                        </div>
                        <div className="nav-items2">
                            <BsCart2 className="nav-items1"/>
                            <AiOutlineBell className="nav-items1"/>
                        </div>
                </div>
                <Page1/>
                <Page2/>
                <Page3/>
                <Page4/>
                <Page5/>
                <Page6/>
                <Page7/>
            </div>
        )
    }
}

export default About;