import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Login from 'app/modules/login/login';
import Register from 'app/modules/account/register/register';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import Page01 from 'app/modules/page01/page01';
import Page02 from 'app/modules/page02/page02';
import Page03 from 'app/modules/page03/page03';
import Page10 from 'app/modules/pages01/page10/page10';
import Page11 from 'app/modules/pages01/page11/page11';
import Page12 from 'app/modules/pages01/page12/page12';
import Page13 from 'app/modules/pages01/page13/page13';
import Page14 from 'app/modules/pages01/page14/page14';
import Page15 from 'app/modules/pages01/page15/page15';
import Page16 from 'app/modules/pages01/page16/page16';
import Page17 from 'app/modules/pages01/page17/page17';
import Page18 from 'app/modules/pages01/page18/page18';
import Page19 from 'app/modules/pages01/page19/page19';
import Page20 from 'app/modules/pages02/page20/page20';
import Page21 from 'app/modules/pages02/page21/page21';
import Page22 from 'app/modules/pages02/page22/page22';
import Page23 from 'app/modules/pages02/page23/page23';
import Page24 from 'app/modules/pages02/page24/page24';
import Page25 from 'app/modules/pages02/page25/page25';
import Page26 from 'app/modules/pages02/page26/page26';
import Page27 from 'app/modules/pages02/page27/page27';
import Page28 from 'app/modules/pages02/page28/page28';
import Page29 from 'app/modules/pages02/page29/page29';
import Page30 from 'app/modules/pages03/page30/page30';
import Page31 from 'app/modules/pages03/page31/page31';
import Page32 from 'app/modules/pages03/page32/page32';
import Page33 from 'app/modules/pages03/page33/page33';
import Page34 from 'app/modules/pages03/page34/page34';
import Page35 from 'app/modules/pages03/page35/page35';
import Page36 from 'app/modules/pages03/page36/page36';
import Page37 from 'app/modules/pages03/page37/page37';
import Page38 from 'app/modules/pages03/page38/page38';
import Page39 from 'app/modules/pages03/page39/page39';
import Entities from 'app/entities';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';

const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => <div>loading ...</div>,
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => <div>loading ...</div>,
});

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/account/register" component={Register} />
      <ErrorBoundaryRoute path="/account/activate/:key?" component={Activate} />
      <ErrorBoundaryRoute path="/account/reset/request" component={PasswordResetInit} />
      <ErrorBoundaryRoute path="/account/reset/finish/:key?" component={PasswordResetFinish} />
      <PrivateRoute path="/admin" component={Admin} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
      <PrivateRoute path="/account" component={Account} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} />
      <ErrorBoundaryRoute path="/" exact component={Home} />
      <ErrorBoundaryRoute path="/page01" exact component={Page01} />
      <ErrorBoundaryRoute path="/page02" exact component={Page02} />
      <ErrorBoundaryRoute path="/page03" exact component={Page03} />
      <ErrorBoundaryRoute path="/pages01/page10" exact component={Page10} />
      <ErrorBoundaryRoute path="/pages01/page11" exact component={Page11} />
      <ErrorBoundaryRoute path="/pages01/page12" exact component={Page12} />
      <ErrorBoundaryRoute path="/pages01/page13" exact component={Page13} />
      <ErrorBoundaryRoute path="/pages01/page14" exact component={Page14} />
      <ErrorBoundaryRoute path="/pages01/page15" exact component={Page15} />
      <ErrorBoundaryRoute path="/pages01/page16" exact component={Page16} />
      <ErrorBoundaryRoute path="/pages01/page17" exact component={Page17} />
      <ErrorBoundaryRoute path="/pages01/page18" exact component={Page18} />
      <ErrorBoundaryRoute path="/pages01/page19" exact component={Page19} />
      <ErrorBoundaryRoute path="/pages02/page20" exact component={Page20} />
      <ErrorBoundaryRoute path="/pages02/page21" exact component={Page21} />
      <ErrorBoundaryRoute path="/pages02/page22" exact component={Page22} />
      <ErrorBoundaryRoute path="/pages02/page23" exact component={Page23} />
      <ErrorBoundaryRoute path="/pages02/page24" exact component={Page24} />
      <ErrorBoundaryRoute path="/pages02/page25" exact component={Page25} />
      <ErrorBoundaryRoute path="/pages02/page26" exact component={Page26} />
      <ErrorBoundaryRoute path="/pages02/page27" exact component={Page27} />
      <ErrorBoundaryRoute path="/pages02/page28" exact component={Page28} />
      <ErrorBoundaryRoute path="/pages02/page29" exact component={Page29} />
      <ErrorBoundaryRoute path="/pages03/page30" exact component={Page30} />
      <ErrorBoundaryRoute path="/pages03/page31" exact component={Page31} />
      <ErrorBoundaryRoute path="/pages03/page32" exact component={Page32} />
      <ErrorBoundaryRoute path="/pages03/page33" exact component={Page33} />
      <ErrorBoundaryRoute path="/pages03/page34" exact component={Page34} />
      <ErrorBoundaryRoute path="/pages03/page35" exact component={Page35} />
      <ErrorBoundaryRoute path="/pages03/page36" exact component={Page36} />
      <ErrorBoundaryRoute path="/pages03/page37" exact component={Page37} />
      <ErrorBoundaryRoute path="/pages03/page38" exact component={Page38} />
      <ErrorBoundaryRoute path="/pages03/page39" exact component={Page39} />
      <PrivateRoute path="/" component={Entities} hasAnyAuthorities={[AUTHORITIES.USER]} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
