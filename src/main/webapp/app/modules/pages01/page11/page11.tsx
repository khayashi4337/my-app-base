import './page11.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'

import styled from 'styled-components';
import { DefaultButton, initializeIcons } from '@fluentui/react';
import { Checkbox } from '@fluentui/react';
import { cpuUsage } from 'process';

initializeIcons();

function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
  // eslint-disable-next-line no-console
  console.log(`The option has been changed to ${isChecked}.`);
}

export type IPage11Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page11 = (props: IPage11Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page11.title">Page11タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page11.subtitle">Page11サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page11.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}
          <h4>スペシャルメニュー</h4>
          <div className="radius1">
            <div className="radius2">リピート</div>
            <div className="radius2">整体</div>
            <div className="radius2">ボディケア</div>
            <div className="radius2">足つぼ・足裏・リフレクソロジー</div>
            <h4>整体６０分＋足つぼ３０分</h4>
            <p>利用条件：「楽天～」を見たとお伝えください。</p>
            <Row>
              <Col md="1"></Col>
              <Col md="4">
                <Inline>
                  <img src="../../../content/images/clock.png" width="20px"/><span>９０分￥５，７２０</span>
                </Inline>
              </Col>
            </Row>
          </div>

          <h4>スペシャルメニュー</h4>
          <div className="radius1">
            <div className="radius2">リピート</div>
            <div className="radius2">整体</div>
            <div className="radius2">ボディケア</div>
            <div className="radius2">足つぼ・足裏・リフレクソロジー</div>
            <h4>整体６０分＋足つぼ３０分</h4>
            <p>利用条件：「楽天～」を見たとお伝えください。</p>
            <Row>
              <Col md="1"></Col>
              <Col md="4">
                <Inline>
                  <img src="../../../content/images/clock.png" width="20px"/><span>９０分￥５，７２０</span>
                </Inline>
              </Col>
            </Row>
          </div>

          <h4>スペシャルメニュー</h4>
          <div className="radius1">
            <div className="radius2">リピート</div>
            <div className="radius2">整体</div>
            <div className="radius2">ボディケア</div>
            <div className="radius2">足つぼ・足裏・リフレクソロジー</div>
            <h4>整体６０分＋足つぼ３０分</h4>
            <p>利用条件：「楽天～」を見たとお伝えください。</p>
            <Row>
              <Col md="1"></Col>
              <Col md="4">
                <Inline>
                  <img src="../../../content/images/clock.png" width="20px"/><span>９０分￥５，７２０</span>
                </Inline>
              </Col>
            </Row>
          </div>

          <p>合計０分／０円<RedButton>選択内容の確認</RedButton> </p>

      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage11 rounded" />
      </Col>
    </Row>
  );
};


const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page11);

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

const Inline = styled.div`
  display: inline-block;
`;
