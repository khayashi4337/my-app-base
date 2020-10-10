import './page20.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { translate } from 'react-jhipster'
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'

export type IPage20Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page20 = (props: IPage20Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
  <Translate contentKey="page20.title">Page20タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page20.subtitle">Page20サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page20.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}

          <p>〇月〇日</p>
          <p>スタッフ数_３人</p>
          <Row md="4">
            <Col md="1">+.-</Col> <Col md="1">△△▲</Col> <Col md="2"> 1人 </Col> <Col md="2">15:00</Col>
          </Row>
          <Row md="4">
            <Col md="1">+.-</Col> <Col md="1">△▲▲</Col> <Col md="2"> 2人 </Col> <Col md="2">20:30</Col>
          </Row>
          <p></p>
          <p>〇月〇日</p>
          <p>スタッフ数_３人</p>
          <Row md="4">
            <Col md="1">+.-</Col> <Col md="1">△△▲</Col> <Col md="2"> 1人 </Col> <Col md="2">15:00</Col>
          </Row>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>


      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage20 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page20);
