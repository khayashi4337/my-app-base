import './page14.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'
import styled from 'styled-components';
import { DefaultButton, initializeIcons } from '@fluentui/react';


export type IPage14Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page14 = (props: IPage14Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page14.title">Page14タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page14.subtitle">Page14サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page14.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}
          <div className="radius1">
            <Row>
              <Col md="4">
                <h4>詳細情報</h4>
              </Col>
              <Col>
                <RedButton>電話</RedButton><RedButton>ネット予約へ進む</RedButton>
              </Col>
            </Row>
            <Row>
              <Col md="4">定休日</Col>
              <Col>なし</Col>
            </Row>
            <Row>
              <Col md="4">営業時間</Col>
              <Col>１２：００～</Col>
            </Row>
            <Row>
              <Col md="4">住所</Col>
              <Col>
                〒〇〇〇-〇〇〇〇
              </Col>
            </Row>
            <Row>
              <Col md="4"></Col>
              <Col>
                <GreenButton>
                  地図を見る
                </GreenButton>
              </Col>
            </Row>
            <Row>
              <Col md="4">参考予算</Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md="4">得意メニュー</Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md="4">エリア</Col>
              <Col></Col>
            </Row>
            <Row>
              <Col md="4">設備サービス</Col>
              <Col></Col>
            </Row>
          </div>

      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage14 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page14);

const RedButton = styled(DefaultButton)`
  background-color: #FF0000;
  color: #ffffff;
  vertical-align: bottom;
  margin-top: 10px;
  margin-left: 10px;
`;

const GreenButton = styled(DefaultButton)`
  background-color: green;
  color: #ffffff;
  vertical-align: bottom;
  margin-top: 10px;
  margin-left: 10px;
`;

