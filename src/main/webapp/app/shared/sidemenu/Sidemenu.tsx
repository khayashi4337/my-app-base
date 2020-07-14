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
            target: 'self',
          },
          // {
          //   name: 'いつくるか',
          //   url: '/page01',
          //   disabled: false,
          //   key: 'page01',
          //   target: 'self',
          // },
          {
            name: '予約の内容',
            url: '/page02',
            disabled: false,
            key: 'page02',
            target: 'self',
          },
          // {
          //   name: 'page03',
          //   url: '/page03',
          //   disabled: false,
          //   key: 'page03',
          //   target: 'self',
          // },
        ],
        isExpanded: true,
      },
      {
        name: 'マッサージページ',
        url: '/pages01/page10',
        key: 'pages01',
        isExpanded: true,
        target: 'self',
        links: [
          {
            name: 'スタッフ指名',
            url: '/pages01/page10',
            disabled: false,
            key: 'page10',
            target: 'self',
          },
          {
            name: 'マッサージメニュー',
            url: '/pages01/page11',
            disabled: false,
            key: 'page11',
            target: 'self',
          },
          {
            name: '空席情報・予約',
            url: '/pages01/page12',
            disabled: false,
            key: 'page12',
            target: 'self',
          },
          {
            name: '地図表示',
            url: '/pages01/page13',
            disabled: false,
            key: 'page13',
            target: 'self',
          },
          {
            name: '詳細情報',
            url: '/pages01/page14',
            disabled: false,
            key: 'page14',
            target: 'self',
          },
          {
            name: 'いつ来店',
            url: '/pages01/page15',
            disabled: false,
            key: 'page15',
            target: 'self',
          },
          // {
          //   name: 'page16',
          //   url: '/pages01/page16',
          //   disabled: false,
          //   key: 'page16',
          //   target: 'self',
          // },
          // {
          //   name: 'page17',
          //   url: '/pages01/page17',
          //   disabled: false,
          //   key: 'page17',
          //   target: 'self',
          // },
          // {
          //   name: 'page18',
          //   url: '/pages01/page18',
          //   disabled: false,
          //   key: 'page18',
          //   target: 'self',
          // },
          // {
          //   name: 'page19',
          //   url: '/pages01/page19',
          //   disabled: false,
          //   key: 'page19',
          //   target: 'self',
          // },
        ],
      }
      // ,
      // {
      //   name: 'Pages02',
      //   url: '/pages02/page20',
      //   key: 'pages02',
      //   isExpanded: true,
      //   target: 'self',
      //   links: [
      //     {
      //       name: 'page20',
      //       url: '/pages02/page20',
      //       disabled: false,
      //       key: 'page20',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page21',
      //       url: '/pages02/page21',
      //       disabled: false,
      //       key: 'page21',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page22',
      //       url: '/pages02/page22',
      //       disabled: false,
      //       key: 'page22',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page23',
      //       url: '/pages02/page23',
      //       disabled: false,
      //       key: 'page23',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page24',
      //       url: '/pages02/page24',
      //       disabled: false,
      //       key: 'page24',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page25',
      //       url: '/pages02/page25',
      //       disabled: false,
      //       key: 'page25',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page26',
      //       url: '/pages02/page26',
      //       disabled: false,
      //       key: 'page26',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page27',
      //       url: '/pages02/page27',
      //       disabled: false,
      //       key: 'page27',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page28',
      //       url: '/pages02/page28',
      //       disabled: false,
      //       key: 'page28',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page29',
      //       url: '/pages02/page29',
      //       disabled: false,
      //       key: 'page29',
      //       target: 'self',
      //     },
      //   ],
      // },
      // {
      //   name: 'Pages03',
      //   url: '/pages03/page30',
      //   key: 'pages03',
      //   isExpanded: true,
      //   target: 'self',
      //   links: [
      //     {
      //       name: 'page30',
      //       url: '/pages03/page30',
      //       disabled: false,
      //       key: 'page30',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page31',
      //       url: '/pages03/page31',
      //       disabled: false,
      //       key: 'page31',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page32',
      //       url: '/pages03/page32',
      //       disabled: false,
      //       key: 'page32',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page33',
      //       url: '/pages03/page33',
      //       disabled: false,
      //       key: 'page33',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page34',
      //       url: '/pages03/page34',
      //       disabled: false,
      //       key: 'page34',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page35',
      //       url: '/pages03/page35',
      //       disabled: false,
      //       key: 'page35',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page36',
      //       url: '/pages03/page36',
      //       disabled: false,
      //       key: 'page36',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page37',
      //       url: '/pages03/page37',
      //       disabled: false,
      //       key: 'page37',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page38',
      //       url: '/pages03/page38',
      //       disabled: false,
      //       key: 'page38',
      //       target: 'self',
      //     },
      //     {
      //       name: 'page39',
      //       url: '/pages03/page39',
      //       disabled: false,
      //       key: 'page39',
      //       target: 'self',
      //     },
      //   ],
      // }
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
