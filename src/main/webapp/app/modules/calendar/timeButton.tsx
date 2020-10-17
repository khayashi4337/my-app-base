import React from 'react';
import { Col } from 'reactstrap';

/*
 * 時間ボタンパラメータ
 */
export class TimeButtonParam {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }
}

/*
 * 時間ボタン
 */
export const TimeButton = (timeButtonParam: TimeButtonParam) => {
  return (
  <Col md="1"><div className="radius3">{ timeButtonParam.value }</div></Col>
  );
}

