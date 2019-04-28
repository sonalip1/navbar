import React, { Component } from 'react' ;
import {Container, Row, Col, Image} from 'react-bootstrap';

export const MenuItem = (props) => {  
    let data = props.data;
    let itemArr = [];
    const renderItems = () => {
        if (props.name == "Product"){
            itemArr = data.map( (item, index) => {
                return(
                    <Row className="itemCls"> 
                        <Col xs={2} md={2}>
                            <div className={"iconCls"+index}></div>
                        </Col>
                        <Col xs={10} md={10}>
                            <div className={"label"+index}>{item["title"]}</div>
                            <div className="labelDesc">{item["sub-title"]}</div>
                        </Col>
                    </Row>
                )
            });
        }else if(props.name == "Developers"){
            itemArr = data.map( (item, index) => {
                return(
                    <Row className="itemCls"> 
                        <Col xs={12} md={12}>
                            <div className={"label1"+index}><i className={"iconDevCls"+index}></i>{item["title"]}</div>
                            <div className="labelDevDesc">{item["sub-title"]}</div>
                        </Col>
                    </Row>
                )
            });
        }else if(props.name == "Company"){
            itemArr = data.map( (item, index) => {
                return(
                    <Row className="itemCls">
                        <Col xs={12} md={12}>
                            <div className={"label11"}><i className="iconStripe"></i>{item["title"]}</div>
                            <div className="labelDesc">{item["sub-title"]}</div>
                        </Col>
                    </Row>
                )
            });
        }
        return itemArr;
    }
    
    return (
        <Container className="productClass">            
            {renderItems()}
        </Container>        
    );    
};