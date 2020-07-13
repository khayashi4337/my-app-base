import './page10.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'
import { Checkbox, DefaultButton, initializeIcons } from '@fluentui/react';

initializeIcons();

function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
  // eslint-disable-next-line no-console
  console.log(`The option has been changed to ${isChecked}.`);
}

export type IPage10Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page10 = (props: IPage10Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page10.title">Page10タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page10.subtitle">Page10サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page10.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}

        <div className="radius1">
          <p>指名可能なスタッフ０名</p>
          <Row>
            <Col>
              <Checkbox label="指名可能なスタッフのみ表示" onChange={_onChange} />
            </Col>
          </Row>
          <Row>
            <Col md="3">
              指名しない
            </Col>
            <Col>ご希望のメニュー、日時で対応可能なスタッフが対応します。</Col>
          </Row>
        </div>
        <h4>スタッフ</h4>
        <div className="radius1">
          <Row>
            <Col md="1"></Col>
              <img src="../../../content/images/mock_photo.png" />
            <Col>
              <p>女性スタッフ○○です</p>
            </Col>
          </Row>
        </div>
      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage10 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page10);
