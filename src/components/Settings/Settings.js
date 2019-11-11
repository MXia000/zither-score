import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        };
    }
   
    async componentDidMount() {
        const userInfo = await Auth.currentAuthenticatedUser();
        this.setState({ userInfo });
    }

    render () {
        const { userInfo }= this.state;
        const { attributes } = userInfo;
        console.log(attributes);
        return (
            <div className = "container">
                <p>Username: {userInfo.username}</p>
                <p>password: </p> 
                <p>email: </p>
            </div>
        )  
    }
}

export default Settings;