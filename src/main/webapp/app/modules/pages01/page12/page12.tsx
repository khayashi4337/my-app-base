import './page12.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'

import styled from 'styled-components';
import { DefaultButton, initializeIcons } from '@fluentui/react';


export type IPage12Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page12 = (props: IPage12Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page12.title">Page12タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page12.subtitle">Page12サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page12.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}
          <div className="radius1">
            <h4>空席情報・予約</h4>
            <p>７／８｜７／９｜７／１０｜７／１１｜７／１２｜７／１３｜７／１４｜</p>
            <p>（水）｜（木）｜（金）｜（土）｜（日）｜（月）｜（火）</p>
            <p>TEL｜×｜〇｜〇｜〇｜〇｜〇｜</p>
            <RedButton>空席確認</RedButton><RedButton>・ネット予約</RedButton>
          </div>


      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage12 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page12);

const RedButton = styled(DefaultButton)`
  background-color: #FF0000;
  color: #ffffff;
  vertical-align: bottom;
  margin-top: 10px;
  margin-left: 10px;
`;
