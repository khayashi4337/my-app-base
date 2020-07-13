import './home.scss';

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { Label } from '@fluentui/react';
import { IRootState } from 'app/shared/reducers';
import { Sidemenu } from '../../shared/sidemenu/Sidemenu'

import { Image, DefaultButton, initializeIcons } from '@fluentui/react';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="home.title">ようこそ, 古式タイマッサージのライタイです!</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="home.subtitle">ここはトップページです。</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              <Translate contentKey="global.messages.info.authenticated.prefix">もし</Translate>
              <Link to="/login" className="alert-link">
                <Translate contentKey="global.messages.info.authenticated.link"> 認証</Translate>
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix">
              を試したければ, デフォルトアカウントをお試しください。:
                <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
                <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
              </Translate>
            </Alert>

            <Alert color="warning">
              <Translate contentKey="global.messages.info.register.noaccount">アカウントをまだお持ちでないですか? </Translate>&nbsp;
              <Link to="/account/register" className="alert-link">
                <Translate contentKey="global.messages.info.register.link"> アカウントを登録する</Translate>
              </Link>
            </Alert>
          </div>
        )}
          <h4>スペシャルメニュー</h4>
          <div className="radius1">
            <div className="radius2">全員</div>
            <div className="radius2">足つぼ</div>
            <div className="radius2">足裏・リフレクソロジー</div>
            <p>【〇〇〇〇】〇〇〇〇〇〇〇〇〇〇</p>
            <Row>
              <Col md="1"></Col>
                <img src="../../../content/images/mock_photo.png" />
              <Col>
                <p>〇〇〇〇〇〇〇</p>
                <p>〇〇〇〇〇〇〇〇〇〇</p>
                <p>〇〇〇〇〇〇〇〇〇〇〇</p>
              </Col>
            </Row>
            <Row>
              <Col md="1"></Col>
              <Col md="4">
                <Inline>
                  <img src="../../../content/images/clock.png" width="20px"/><span>８０分￥５，１１０</span>
                </Inline>
              </Col>
              <Col>
                <RedButton>
                  <p>このメニューで予約</p>
                </RedButton>
              </Col>
            </Row>

            </div>
          <p>すべてのメニューを見る</p>
          <div className="radius1">
            <h4>お店からのメッセージ</h4>
            <p>「アクセス」〇〇〇〇〇〇〇〇〇〇〇〇</p>
            <p>「駐輪場」〇〇〇〇〇〇〇〇〇〇〇〇</p>
          </div>
          <div className="radius1">
            <h4>口コミ</h4>
            <div className="radius2">足裏</div>
            <p>★★★★★★5.0〇〇さん／５０代（男性）</p>
            <p>〇〇〇〇〇〇〇〇〇〇</p>
            <p>〇〇〇〇〇〇〇〇〇〇</p>
            <p>すべての口コミを見る＞</p>
            <p></p>
          </div>
          <div className="radius1">
            <h4>スタッフ</h4>
            <Row>
              <Col md="1"></Col>
                <img src="../../../content/images/mock_photo.png" />
              <Col>
                <p>〇〇〇〇〇〇</p>
                <p>インストラクター</p>
                <p>女性スタッフ</p>
              </Col>
            </Row>
          </div>
          <p>クーポン</p>
          <RedButton>電話で予約</RedButton>
          <RedButton>ネットで予約</RedButton>

          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

        {/* <ul>
          <li>
            <a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer">
              <Translate contentKey="home.link.homepage">JHipster homepage</Translate>
            </a>
          </li>
        </ul> */}
      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideimg rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);

const RedButton = styled(DefaultButton)`
  background-color: #FF0000;
  color: #ffffff;
  vertical-align: bottom;
  margin-left: 10px;
`;

const Inline = styled.div`
  display: inline-block;
`;
