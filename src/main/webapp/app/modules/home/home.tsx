import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { Label } from '@fluentui/react';
import { IRootState } from 'app/shared/reducers';
import { Sidemenu } from '../../shared/sidemenu/Sidemenu'

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="home.title">ようこそ, アプリコットのデモページ!</Translate>
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
