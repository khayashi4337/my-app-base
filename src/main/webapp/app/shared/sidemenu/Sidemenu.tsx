import React from "react";

import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { Nav, INavLink, INavStyles, INavLinkGroup, Fabric, initializeIcons } from '@fluentui/react';

initializeIcons();

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: 'トップページ',
        url: '/',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links: [
          {
            name: 'home',
            url: '/',
            key: 'home',
            target: '_blank',
          },
          {
            name: 'page01',
            url: '/page01',
            disabled: false,
            key: 'page01',
            target: '_blank',
          },
        ],
        isExpanded: true,
      },
      {
        name: 'Pages01',
        url: '/pages01/page02',
        key: 'pages01',
        isExpanded: true,
        target: '_blank',
        links: [
          {
            name: 'page02',
            url: '/pages01/page02',
            disabled: false,
            key: 'page02',
            target: '_blank',
          },
          {
            name: 'page03',
            url: '/pages01/page03',
            disabled: false,
            key: 'page03',
            target: '_blank',
          },
        ],
      }
    ],
  },
];

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}

export const Sidemenu: React.FC = () => {
  return (
    <Col md="2">
      <Nav
        onLinkClick={_onLinkClick}
        selectedKey="key3"
        ariaLabel="Nav basic example"
        styles={navStyles}
        groups={navLinkGroups}
      />
    </Col>
  );
}
