import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const element = <Alert>testing</Alert>;

class App extends React.Component {
    render() {
        return (
          <Row>
            <Col>
              <Alert variant="primary">testing</Alert>
            </Col>
          </Row>
        );
    }
}

export default App;
