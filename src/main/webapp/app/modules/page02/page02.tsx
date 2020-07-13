import './page02.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../shared/sidemenu/Sidemenu'

export type IPage02Prop = StateProps;

export const Page02 = (props: IPage02Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          予約内容選択
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
        <p>| メニュー＿＿必須＿＿＿＿＿＿＿＿＿＿＿＿＿＿変更</p>
        <p>|＿未選択＿＿＿＿メニューを選択してください。</p>
        <p>|</p>
        <p></p>
        <p>｜＿スタッフ＿必須＿＿＿＿＿＿＿＿＿＿＿＿＿＿変更</p>
        <p>｜＿＿指名しない</p>
        <p>｜＿＿ご希望のメニュー、日時で対応可能なスタッフが対応します。</p>
        <p>｜＿＿スタッフが対応します。</p>
        <p>｜</p>
        <p></p>
        <p>｜＿日時＿＿必須＿＿＿＿＿＿変更</p>
        <p>｜＿未選択＿＿＿日時を選択してください。</p>
        <p></p>
        <p></p>
        <p>確定して確認画面へ進む</p>
        <p>｜</p>
        <p></p>
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
