import React, {Component} from 'react';
import {Row, Col, Modal, Button} from 'react-bootstrap';

class NavModal extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      console.log('close')
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.handleShow} aria-controls="basic-navbar-nav" type="button" 
            aria-label="Toggle navigation" className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>PRODUCTS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="itemCls"> 
                    <Col xs={6} md={6}>
                        <div className={"labelPayment"}><i className="iconPayment"></i>Payments</div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className={"labelAtlas"}><i className="iconAtlas"></i>Atlas</div>
                    </Col>
                </Row>
                <Row className="itemCls"> 
                    <Col xs={6} md={6}>
                        <div className={"labelBill"}><i className="iconBill"></i>Billing</div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className={"labelRadar"}><i className="iconRadar"></i>Radar</div>
                    </Col>
                </Row>
                <Row className="itemCls"> 
                    <Col xs={6} md={6}>
                        <div className={"labelConnect"}><i className="iconConnect"></i>Connect</div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className={"labelIssue"}><i className="iconIssue"></i>Issuing</div>
                    </Col>
                </Row>
                <Row className="itemCls"> 
                    <Col xs={6} md={6}>
                        <div className={"labelSigma"}><i className="iconSigma"></i>Sigma</div>
                    </Col>
                    <Col xs={6} md={6}>
                        <div className={"labelTerminal"}><i className="iconTerminal"></i>Terminal</div>
                    </Col>
                </Row>
            </Modal.Body>            
          </Modal>
        </div>
      );
    }
  }
  
  export default NavModal;