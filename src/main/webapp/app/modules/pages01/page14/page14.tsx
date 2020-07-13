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
            <h4>詳細情報</h4>
            <RedButton>電話・ネット予約</RedButton><RedButton>電話番号・ネット予約へ進む</RedButton>
            <p>定休日｜なし</p>
            <p>営業時間｜１２：００～</p>
            <p>住所｜〒〇〇〇-〇〇〇〇</p>
            <GreenButton>地図を見る</GreenButton>
            <p>参考予算</p>
            <p>得意メニュー</p>
            <p>エリア</p>
            <p>設備サービス</p>
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

