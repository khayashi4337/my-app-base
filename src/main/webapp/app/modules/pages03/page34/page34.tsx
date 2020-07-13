import './page34.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'

export type IPage34Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page34 = (props: IPage34Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page34.title">Page34タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page34.subtitle">Page34サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page34.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}

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
          <p></p>
          <p></p>
          <p></p>


      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage34 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page34);
