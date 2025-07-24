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

import { Calendar, DayOfWeek, DateRangeType } from 'office-ui-fabric-react/lib/Calendar';
import { addDays, getDateRangeArray } from '@fluentui/date-time-utilities';

function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
  // eslint-disable-next-line no-console
  console.log(`The option has been changed to ${isChecked}.`);
}

export type IPage15Prop = StateProps;

export interface ICalendarInlineExampleProps {
  isMonthPickerVisible?: boolean;
  dateRangeType: DateRangeType;
  autoNavigateOnSelection: boolean;
  showGoToToday: boolean;
  showNavigateButtons?: boolean;
  highlightCurrentMonth?: boolean;
  highlightSelectedMonth?: boolean;
  isDayPickerVisible?: boolean;
  showMonthPickerAsOverlay?: boolean;
  showWeekNumbers?: boolean;
  minDate?: Date;
  maxDate?: Date;
  restrictedDates?: Date[];
  showSixWeeksByDefault?: boolean;
  workWeekDays?: DayOfWeek[];
  firstDayOfWeek?: DayOfWeek;
}

const dayPickerStrings = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  goToToday: 'Go to today',
  weekNumberFormatString: 'Week number {0}',
  prevMonthAriaLabel: 'Previous month',
  nextMonthAriaLabel: 'Next month',
  prevYearAriaLabel: 'Previous year',
  nextYearAriaLabel: 'Next year',
  prevYearRangeAriaLabel: 'Previous year range',
  nextYearRangeAriaLabel: 'Next year range',
  closeButtonAriaLabel: 'Close',
  monthPickerHeaderAriaLabel: '{0}, select to change the year',
  yearPickerHeaderAriaLabel: '{0}, select to change the month',
};
const divStyle: React.CSSProperties = {
  height: 'auto',
};
const buttonStyle: React.CSSProperties = {
  margin: '17px 10px 0 0',
};
let dateRangeString: string | null = null;

export const CalendarInlineExample: React.FunctionComponent<MyCalendarArgs> = (
  args: MyCalendarArgs,
) => {

  const props: ICalendarInlineExampleProps = {
    dateRangeType: DateRangeType.Month,
    autoNavigateOnSelection: false,
    showGoToToday: true
  };

  const [selectedDateRange, setSelectedDateRange] = React.useState<Date[]>();
  const [selectedDate, setSelectedDate] = React.useState<Date>();

  const onSelectDate = (date: Date, dateRangeArray: Date[]): void => {
    setSelectedDate(date);
    setSelectedDateRange(dateRangeArray);
  };

  const goPrevious = () => {
    const goPreviousSelectedDate = selectedDate || new Date();
    const dateRangeArray = getDateRangeArray(goPreviousSelectedDate, props.dateRangeType, DayOfWeek.Sunday);
    let subtractFrom = dateRangeArray[0];
    let daysToSubtract = dateRangeArray.length;
    if (props.dateRangeType === DateRangeType.Month) {
      subtractFrom = new Date(subtractFrom.getFullYear(), subtractFrom.getMonth(), 1);
      daysToSubtract = 1;
    }
    const newSelectedDate = addDays(subtractFrom, -daysToSubtract);
    return {
      goPreviousSelectedDate: newSelectedDate,
    };
  };

  const goNext = () => {
    const goNextSelectedDate = selectedDate || new Date();
    const dateRangeArray = getDateRangeArray(goNextSelectedDate, props.dateRangeType, DayOfWeek.Sunday);
    const newSelectedDate = addDays(dateRangeArray ? dateRangeArray.pop() : null, 1);

    return {
      goNextSelectedDate: newSelectedDate,
    };
  };

  const onDismiss = () => {
    return selectedDate;
  };

  if (selectedDateRange) {
    const rangeStart = selectedDateRange[0];
    const rangeEnd = selectedDateRange[selectedDateRange.length - 1];
    dateRangeString = rangeStart.toLocaleDateString() + '-' + rangeEnd.toLocaleDateString();
  }

  return (
    <div style={divStyle}>
      {
        <div>
          Selected date(s): <span>{!selectedDate ? 'Not set' : selectedDate?.toLocaleString()}</span>
        </div>
      }
      <div>
        Selected dates:
        <span> {!dateRangeString ? 'Not set' : dateRangeString}</span>
      </div>
      {(props.minDate || props.maxDate) && (
        <div>
          Date boundary:
          <span>
            {' '}
            {props.minDate ? props.minDate.toLocaleDateString() : 'Not set'}-
            {props.maxDate ? props.maxDate.toLocaleDateString() : 'Not set'}
          </span>
        </div>
      )}
      {props.restrictedDates && (
        <div>
          Disabled date(s):
          <span>
            {' '}
            {props.restrictedDates.length > 0
              ? props.restrictedDates.map(d => d.toLocaleDateString()).join(', ')
              : 'Not set'}
          </span>
        </div>
      )}
      <Calendar
        // eslint-disable-next-line react/jsx-no-bind
        onSelectDate={onSelectDate}
        // eslint-disable-next-line react/jsx-no-bind
        onDismiss={onDismiss}
        isMonthPickerVisible={props.isMonthPickerVisible}
        dateRangeType={props.dateRangeType}
        autoNavigateOnSelection={props.autoNavigateOnSelection}
        showGoToToday={props.showGoToToday}
        value={selectedDate ? selectedDate : null}
        firstDayOfWeek={props.firstDayOfWeek ? props.firstDayOfWeek : DayOfWeek.Sunday}
        strings={dayPickerStrings}
        highlightCurrentMonth={props.highlightCurrentMonth}
        highlightSelectedMonth={props.highlightSelectedMonth}
        isDayPickerVisible={props.isDayPickerVisible}
        showMonthPickerAsOverlay={props.showMonthPickerAsOverlay}
        showWeekNumbers={props.showWeekNumbers}
        minDate={props.minDate}
        maxDate={props.maxDate}
        restrictedDates={props.restrictedDates}
        showSixWeeksByDefault={props.showSixWeeksByDefault}
        workWeekDays={props.workWeekDays}
      />
      {props.showNavigateButtons && (
        <div>
          <DefaultButton
            style={buttonStyle}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={goPrevious}
            text="Previous"
          />
          <DefaultButton
            style={buttonStyle}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={goNext}
            text="Next"
          />
        </div>
      )}
    </div>
  );
};

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
          <CalendarInlineExample  title="2020年7月" />
        </div>

        <div className="radius1">
          <MyCalendar title="2020年8月"/>
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

