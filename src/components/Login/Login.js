import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { Authenticator, SignIn } from 'aws-amplify-react';
import { createUser } from '../../mutationHelper';
import { getUser } from '../../queryHelper';
import awsmobile from '../../aws-exports';

const authErrorMessageMapper = (message) => {
    if (/incorrect.*username.*password/i.test(message)) {
        return 'Incorrect username or password';
    }
    console.log("ERROR: " + message);
    return message;
}

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <Authenticator
                        hideDefault={true}                        
                        onStateChange={this.handleAuthStateChange}  
                        amplifyConfig={awsmobile}
                        errorMessage={authErrorMessageMapper}
                    >
                        <SignIn />
                    </Authenticator>
                </div>
            </div>
        )
    }
    handleAuthStateChange = async (state) => {
        if (state === 'signedIn') {
            const cognitoUser = await Auth.currentAuthenticatedUser();
            const userExists = await getUser(cognitoUser.username);
            if (!userExists) {
                const createdUser = await createUser({id: cognitoUser.username, username: cognitoUser.username });
                this.props.onLogin(cognitoUser);
            } else {
                this.props.onLogin(cognitoUser);
            }
        }
    }
    
}
export default Login;