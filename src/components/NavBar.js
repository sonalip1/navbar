import React, {Component} from 'react';
import $ from 'jquery';
import {Popover, OverlayTrigger, Container, Navbar, Nav, Fade} from 'react-bootstrap';
import {MenuItem} from './MenuItem';
import CustomModal from './NavModal';
import CustomPopover from './CustomPopover';

class NavBar extends Component{
    constructor(props){
        super(props);        
        //this.renderTooltip = this.renderTooltip.bind(this);
        this.renderMenuItems = this.renderMenuItems.bind(this);
        this.handleWindowSize = this.handleWindowSize.bind(this);
        this.state = {
            responseData:{  "product": [    {      "title": "PAYMENTS",      "sub-title": "A complete payments platform engineered for growth."    },    {      "title": "BILLING",      "sub-title": "Build and scale your recurring business model."    },    {      "title": "CONNECT",      "sub-title": "Everything platforms need to get sellers paid."    }  ],  "developers": [    {      "title": "DOCUMENTATION",      "sub-title": "Start integrating Stripe’s products and tools."    },    {      "title": "FULL API REFERENCE",      "sub-title": "Build and scale your recurring business model."    },    {      "title": "API STATUS",      "sub-title": "Everything platforms need to get sellers paid."    }  ],  "company": [    {      "title": "ABOUT STRIPE",      "sub-title": "A complete payments platform engineered for growth."    }  ]}
        }
    }

    componentWillMount(){
        const url = 'https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4';  
        $.ajax({url: url, success: function(result){
            //console.log(result)
            let arr = [];
            arr.push(result);
            this.setState({
                responseData : result
            });
        }.bind(this)});
        window.addEventListener('resize', this.handleWindowSize);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowSize);
    }

    renderMenuItems () {
        let resp = this.state.responseData;
        let itemArray = [];
        let counter = 0;
        for (var item in resp){
            let itemName = item.charAt(0).toUpperCase() + item.slice(1);
            itemArray.push(
                <CustomPopover 
                    component={<div 
                        style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        padding: '2px 10px',
                        paddingBottom: '10px',
                        borderRadius: 7,
                        cursor: 'pointer'
                        }}>
                        <MenuItem data={resp[item]} name={itemName}></MenuItem>
                    </div>}
                    placement="bottom"
                    onMouseEnter={() => { }}
                    delay={200}
                    >
                    <Nav.Link>{itemName}</Nav.Link>
                </CustomPopover>
            );    
        }
        return itemArray;
    }

    handleWindowSize(){
        this.setState({});
    }

    render(){
        return (
            <Container key="container" className="globalNav">
                <Navbar key="navbar" bg="primary" expand="lg">
                    <CustomModal></CustomModal>
                    {window.innerWidth > 990 ? (<Navbar.Collapse key="navCollapse" id="basic-navbar-nav">
                        <Nav key="nav" className="navMarginCls">
                            {this.renderMenuItems()}
                        </Nav>
                    </Navbar.Collapse>):''}
                </Navbar>
            </Container>
        );
    }
}

export default NavBar;