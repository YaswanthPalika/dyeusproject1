import { Component } from "react";
import './index.css'
import {AiOutlineMenu,AiOutlineBell} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'

import Page1 from '../page1'
import Page2 from '../page2'


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
            </div>
        )
    }
}

export default About;