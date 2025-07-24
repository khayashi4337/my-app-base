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

export class TimeButtonProp {
  readonly timeButtonParam: TimeButtonParam;

  constructor(timeButtonParam: TimeButtonParam) {
    this.timeButtonParam = timeButtonParam;
  }
}

/*
 * 時間ボタン
 */
export const TimeButton = (timeButtonProp: TimeButtonProp) => {
  return (
  <Col md="1"><div className="radius3">{ timeButtonProp.timeButtonParam.value }</div></Col>
  );
}

