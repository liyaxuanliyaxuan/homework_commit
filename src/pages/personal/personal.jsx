import  React,{Component} from "react"


import HeaderBar from "../../components/header/header"

import {GlobalStyle} from "../../globalStyle"



export default class Personal extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render(){
        return(
            <div>
                <GlobalStyle/>
                <HeaderBar/>
                personal
            </div>
        )
    }
}