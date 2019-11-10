import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
    } from 'react-bootstrap';



class NavBar extends Component {
    render(){  
        console.log(this.props.location);
        if (this.props.loggedInUser && this.props.location.pathname === '/Login') {
            return <Redirect to="/" />;
        }

        
        
        return (
            <div>
                <Navbar bg="secondary" expand="lg">
                
                <Navbar.Brand href="/Library">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Discover</Nav.Link>
                    </Nav>

                    <Form inline className="mx-auto">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                    
                    {this.props.loggedInUser
                        ? <>
                            <Nav className="ml-auto">
                                <button onClick={this._onClick}>Create</button>
                                <Nav.Link href="#">Notification</Nav.Link>
                            </Nav>
                            <NavDropdown title="Icon" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/Library">Library</NavDropdown.Item>
                                <NavDropdown.Item href="/Settings">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Help</NavDropdown.Item>
                                <NavDropdown.Item href="/" onClick={this.props.onSignOut}>Logout</NavDropdown.Item>
                            </NavDropdown> 
                        </>
                        : <Nav.Link href="/Login">Login</Nav.Link>
                    }
                    
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(NavBar);