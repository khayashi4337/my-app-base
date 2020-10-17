import './page15.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'
import { CalendarInlineExample } from '../../calendar/calendar'

import styled from 'styled-components';
import { DefaultButton} from '@fluentui/react';
import { Checkbox } from '@fluentui/react';

import { DateRangeType } from 'office-ui-fabric-react/lib/Calendar';


function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
  // eslint-disable-next-line no-console
  console.log(`The option has been changed to ${isChecked}.`);
}

export type IPage15Prop = StateProps;


{/* i18n: src/main/webapp/i18n */}
export const Page15 = (props: IPage15Prop) => {
  const { account } = props;

  const dateRangeType: DateRangeType = DateRangeType.Month;

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
        <CalendarInlineExample isMonthPickerVisible={ false } dateRangeType={ DateRangeType.Day } autoNavigateOnSelection={ false } showGoToToday={ false } />
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

