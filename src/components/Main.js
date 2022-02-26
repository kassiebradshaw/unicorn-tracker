import React from 'react';
import Unicorn from './Unicorn.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {
    render() {
        return (
            <div id="main">

                <Row xs={1} md={2} lg={3} id="Row"> 
                    
                    {this.props.unicornData.map((unicorn, idx) =>
                    <Col key={idx}>
                        <Unicorn
                            idx={idx}
                            unicorn={unicorn}
                            name={unicorn.name}
                            favFood={unicorn.favFood}
                            color={unicorn.color}
                            location={unicorn.location}
                            imgUrl={unicorn.imgUrl}
                            // handleUpdate={this.props.handleUpdate}
                        />
                    </Col>
                    )}
                </Row>
            </div>
        )
    }
}

export default Main;