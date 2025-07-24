import './page21.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import styled from 'styled-components'

import { Sidemenu } from '../../../shared/sidemenu/Sidemenu'

export type IPage21Prop = StateProps;

{/* i18n: src/main/webapp/i18n */}
export const Page21 = (props: IPage21Prop) => {
  const { account } = props;
  return (
    <Row>
      <Sidemenu/>
      <Col md="7">
        <h2>
          <Translate contentKey="page21.title">Page21タイトル</Translate>
        </h2>
        <p className="lead">
          <Translate contentKey="page21.subtitle">Page21サブタイトル</Translate>
        </p>
        {account && account.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="page21.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}

          <p>前____〇年〇月____次</p>
          <p></p>

          <div className="radiusPage21">
          <h4>2020年7月</h4>
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
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
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
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
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
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
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
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
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
          <Row>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col md="1"></Col>
          </Row>
        </div>


        <div className="radiusPage21">
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
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col2 md="1">3</Col2>
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
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1"></Col2>
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
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1"></Col2>
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
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1"></Col2>
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
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col2 md="1"></Col2>
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
          <Row>
            <Col2 md="1">3</Col2>
            <Col2 md="1">3</Col2>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
            <Col md="1"></Col>
          </Row>
        </div>

          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>


      </Col>
      {/* 右側のイラスト */}
      <Col md="3" className="pad">
        <span className="sideImgPage21 rounded" />
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

const Col2 = styled(Col)`
  background: #ccccff;
`;

export default connect(mapStateToProps)(Page21);
