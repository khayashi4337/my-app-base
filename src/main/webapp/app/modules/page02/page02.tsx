import './page02.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../shared/sidemenu/Sidemenu'

import styled from 'styled-components';
import { DefaultButton, initializeIcons } from '@fluentui/react';
import { cpuUsage } from 'process';

export type IPage02Prop = StateProps;

export const Page02 = (props: IPage02Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page02.title">Page02タイトル</Translate>
        </h2>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page02.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div>
          </div>
        )}

        <div className="radius1">
          <Row>
            <Col md="3">
              <h4>メニュー</h4>
            </Col>
            <Col md="5">必須</Col>
            <Col >変更</Col>
          </Row>
          <Row>
            <Col md="4">未選択</Col>
            <Col>メニューを選択してください。</Col>
          </Row>
        </div>
        <div className="radius1">
          <Row>
            <Col md="3">
              <h4>スタッフ</h4>
            </Col>
            <Col md="5">必須</Col>
            <Col >変更</Col>
          </Row>
          <Row>
            <Col md="3">
              指名しない
            </Col>
            <Col>ご希望のメニュー、日時で対応可能なスタッフが対応します。</Col>
          </Row>
        </div>
        <div className="radius1">
          <Row>
            <Col md="3">
              <h4>日時</h4>
            </Col>
            <Col md="5">必須</Col>
            <Col >変更</Col>
          </Row>
          <Row>
            <Col md="3">
              未選択
            </Col>
            <Col>日時を選択してください。</Col>
          </Row>
        </div>
        <p></p>
        <RedButton>確定して確認画面へ進む</RedButton>

      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage02 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page02);

const RedButton = styled(DefaultButton)`
  background-color: #FF0000;
  color: #ffffff;
  vertical-align: bottom;
  margin-left: 10px;
  margin-top: 10px;
`;
