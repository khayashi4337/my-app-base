import './page13.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'
import styled from 'styled-components';
import { DefaultButton, initializeIcons } from '@fluentui/react';

import GoogleMap from 'google-map-react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ lat, lng, text }) => <div><img src="../../../content/images/pin.png" /></div>;


export type IPage13Prop = StateProps;

// const defaultProps = {
//   center: {
//     lat: 59.95,
//     lng: 30.33
//   },
//   zoom: 11
// };

{/* i18n: src/main/webapp/i18n */}

export const Page13 = (props: IPage13Prop) => {
  const { account } = props;

  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page13.title">Page13タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page13.subtitle">Page13サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page13.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}
          <p><GreenButton>地図アプリで見る</GreenButton></p>
          <div className="radius1">
            <div  style={{ height: '300px', width: '100%' }}>
              {/* AIzaSyAKl0y9oHbtrG8MzQ7k3DOUXdEHGT_rOscKUNI */}
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{lat: 35.7671479, lng: 139.8483769}}
                defaultZoom={19}
              >
                <AnyReactComponent
                  lat={35.7671479}
                  lng={139.8483769}
                  text="Laithai"
                />
              </GoogleMapReact>
            </div>
          </div>

      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage13 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Page13);

const GreenButton = styled(DefaultButton)`
  background-color: green;
  color: #ffffff;
  vertical-align: bottom;
  margin-top: 10px;
  margin-left: 10px;
`;

