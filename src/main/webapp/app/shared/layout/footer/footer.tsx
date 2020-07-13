import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="2"/>
      <Col md="10">
        <p>
          <Translate contentKey="footer">Your footer</Translate>
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;
