import './page33.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'

export type IPage33Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page33 = (props: IPage33Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page33.title">Page33タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page33.subtitle">Page33サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page33.logged.message" interpolate={{ username: account.login }}>
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
        <span className="sideImgPage33 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page33);
