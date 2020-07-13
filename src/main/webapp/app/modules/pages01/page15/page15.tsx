import './page15.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'
import styled from 'styled-components';
import { DefaultButton, initializeIcons } from '@fluentui/react';


export type IPage15Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page15 = (props: IPage15Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page15.title">Page15タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page15.subtitle">Page15サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page15.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}
        <div className="radius1">
          <p>2020年7月</p>
          <p>＿日＿＿月＿＿火＿＿水＿＿木＿＿金＿＿土</p>
          <p>＿＿＿＿＿＿＿＿＿＿１＿＿２＿＿３＿＿４</p>
          <p>＿５＿＿６＿＿７＿＿８＿＿９＿１０＿１１</p>
          <p>１２＿１３＿１４＿１５＿１６＿１７＿１８</p>
          <p>１９＿２０＿２１＿２２＿２３＿２４＿２５</p>
          <p>２６＿２７＿２８＿２９＿３０＿３１</p>
        </div>
        <p>□＿当日＿＿□＿選択した日付・時間</p>
        <p></p>
        <p>１５：００＿１５：３０＿１６：００＿１６：３０</p>
        <p>１７：００＿１７：３０＿１８：００＿１８：３０</p>
        <p>１９：００＿１９：３０＿２０：００＿２０：３０</p>
        <p></p>
        <p></p>
        <p></p>

      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage15 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page15);

const RedButton = styled(DefaultButton)`
  background-color: #FF0000;
  color: #ffffff;
  vertical-align: bottom;
  margin-top: 10px;
  margin-left: 10px;
`;

