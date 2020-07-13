import './page13.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'
import styled from 'styled-components';
import { DefaultButton, initializeIcons } from '@fluentui/react';


export type IPage13Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page13 = (props: IPage13Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page13.title">Page13タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page13.subtitle">Page13サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page13.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}
          <p><GreenButton>地図アプリで見る</GreenButton></p>
          <div className="radius1">
            <p>小さい地図小さい地図小さい地図</p>
            <p>小さい地図小さい地図小さい地図</p>
            <p>小さい地図小さい地図小さい地図</p>
          </div>

      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage13 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page13);

const GreenButton = styled(DefaultButton)`
  background-color: green;
  color: #ffffff;
  vertical-align: bottom;
  margin-top: 10px;
  margin-left: 10px;
`;

