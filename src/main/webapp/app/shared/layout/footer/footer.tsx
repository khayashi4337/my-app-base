import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

import styled from 'styled-components';
import { DefaultButton} from '@fluentui/react';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="2"/>
      <Col md="10">
        <p>
          {/* <Translate contentKey="footer">Your footer</Translate> */}
          <RedButton>電話予約</RedButton><RedButton>ネットで予約</RedButton>
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;

const RedButton = styled(DefaultButton)`
  background-color: #FF0000;
  color: #ffffff;
  vertical-align: bottom;
  margin-top: 10px;
  margin-left: 10px;
`;
