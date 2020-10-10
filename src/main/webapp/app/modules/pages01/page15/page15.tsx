import './page15.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'
import styled from 'styled-components';
import { DefaultButton, initializeIcons } from '@fluentui/react';
import { Checkbox } from '@fluentui/react';

function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
  // eslint-disable-next-line no-console
  console.log(`The option has been changed to ${isChecked}.`);
}

export type IPage15Prop = StateProps;

class MyCalendarArgs {
  title: string;

  constructor(title: string) {
    this.title = title
  }
}

const MyCalendar = (args: MyCalendarArgs) => {
  return <React.Fragment>

  <h4>{args.title}</h4>
  <Row>
    <Col md="1">日</Col>
    <Col md="1">月</Col>
    <Col md="1">火</Col>
    <Col md="1">水</Col>
    <Col md="1">木</Col>
    <Col md="1">金</Col>
    <Col md="1">土</Col>
  </Row>
  <Row>
    <Col md="1"></Col>
    <Col md="1"></Col>
    <Col md="1"></Col>
    <Col md="1">01</Col>
    <Col md="1">02</Col>
    <Col md="1">03</Col>
    <Col md="1">04</Col>
  </Row>
  <Row>
    <Col md="1">05</Col>
    <Col md="1">06</Col>
    <Col md="1">07</Col>
    <Col md="1">08</Col>
    <Col md="1">09</Col>
    <Col md="1">10</Col>
    <Col md="1">11</Col>
  </Row>
  <Row>
    <Col md="1">12</Col>
    <Col md="1">13</Col>
    <Col md="1">14</Col>
    <Col md="1">15</Col>
    <Col md="1">16</Col>
    <Col md="1">17</Col>
    <Col md="1">18</Col>
  </Row>
  <Row>
    <Col md="1">19</Col>
    <Col md="1">20</Col>
    <Col md="1">21</Col>
    <Col md="1">22</Col>
    <Col md="1">23</Col>
    <Col md="1">24</Col>
    <Col md="1">25</Col>
  </Row>
  <Row>
    <Col md="1">26</Col>
    <Col md="1">27</Col>
    <Col md="1">28</Col>
    <Col md="1">29</Col>
    <Col md="1">30</Col>
    <Col md="1">31</Col>
    <Col md="1"></Col>
  </Row>
  </React.Fragment>;
}

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
          <MyCalendar title="2020年5月"/>
        </div>


        <div className="radius1">
          <h4>2020年8月</h4>
          <Row>
            <Col md="1">日</Col>
            <Col md="1">月</Col>
            <Col md="1">火</Col>
            <Col md="1">水</Col>
            <Col md="1">木</Col>
            <Col md="1">金</Col>
            <Col md="1">土</Col>
          </Row>
          <Row>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1">01</Col>
          </Row>
          <Row>
            <Col md="1">02</Col>
            <Col md="1">03</Col>
            <Col md="1">04</Col>
            <Col md="1">05</Col>
            <Col md="1">06</Col>
            <Col md="1">07</Col>
            <Col md="1">08</Col>
          </Row>
          <Row>
            <Col md="1">09</Col>
            <Col md="1">10</Col>
            <Col md="1">11</Col>
            <Col md="1">12</Col>
            <Col md="1">13</Col>
            <Col md="1">14</Col>
            <Col md="1">15</Col>
          </Row>
          <Row>
            <Col md="1">16</Col>
            <Col md="1">17</Col>
            <Col md="1">18</Col>
            <Col md="1">19</Col>
            <Col md="1">20</Col>
            <Col md="1">21</Col>
            <Col md="1">22</Col>
          </Row>
          <Row>
            <Col md="1">23</Col>
            <Col md="1">24</Col>
            <Col md="1">25</Col>
            <Col md="1">26</Col>
            <Col md="1">27</Col>
            <Col md="1">28</Col>
            <Col md="1">29</Col>
          </Row>
          <Row>
            <Col md="1">30</Col>
            <Col md="1">31</Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
          </Row>
        </div>

        <Row>
          <Col md="1">
            <Checkbox label="当日" onChange={_onChange} />
          </Col>
          <Col>
            <Checkbox label="選択した日付・時間" onChange={_onChange} />
          </Col>
        </Row>
        <Row>
          <Col md="1"><div className="radius3">15:00</div></Col>
          <Col md="1"><div className="radius3">15:30</div></Col>
          <Col md="1"><div className="radius3">16:00</div></Col>
          <Col md="1"><div className="radius3">16:30</div></Col>
        </Row>
        <Row>
          <Col md="1"><div className="radius3">17:00</div></Col>
          <Col md="1"><div className="radius3">17:30</div></Col>
          <Col md="1"><div className="radius3">18:00</div></Col>
          <Col md="1"><div className="radius3">18:30</div></Col>
        </Row>
        <Row>
          <Col md="1"><div className="radius3">19:00</div></Col>
          <Col md="1"><div className="radius3">19:30</div></Col>
          <Col md="1"><div className="radius3">20:00</div></Col>
          <Col md="1"><div className="radius3">20:30</div></Col>
        </Row>

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

