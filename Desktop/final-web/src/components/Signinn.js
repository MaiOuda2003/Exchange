import React ,{Component} from 'react'

class  Signinn extends Component{
    state = {
		email: "",
        password: "",
        text:"",
    };
    render(){
        return(
            <div>
    <input type="text" id="first" placeholder="First Name"/>
    <input type="text" id="last" placeholder="Last Name"/>
    <input type="email" id="email" placeholder="Email"/>
    <input type="password" id="password" placeholder="Password"/>
    <input type="password" id="confirm" placeholder="Confirm Password"/>
    <button id="send">Send</button>
    </div>
        )
    }
}

export default Signinn