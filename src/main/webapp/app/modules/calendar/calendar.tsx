import * as React from 'react';
import { Calendar, DayOfWeek, DateRangeType } from 'office-ui-fabric-react/lib/Calendar';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { addDays, getDateRangeArray } from '@fluentui/date-time-utilities';

// カレンダーの引数
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
  // months: [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ],
//  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
months: [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
],
  shortMonths: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  // shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  shortDays: ['日', '月', '火', '水', '木', '金', '土'],
  goToToday: '今日',
  weekNumberFormatString: 'Week number {0}',
  // prevMonthAriaLabel: 'Previous month',
  // nextMonthAriaLabel: 'Next month',
  // prevYearAriaLabel: 'Previous year',
  // nextYearAriaLabel: 'Next year',
  // prevYearRangeAriaLabel: 'Previous year range',
  // nextYearRangeAriaLabel: 'Next year range',
  // closeButtonAriaLabel: 'Close',
  prevMonthAriaLabel: '前月',
  nextMonthAriaLabel: '翌月',
  prevYearAriaLabel: '前年',
  nextYearAriaLabel: '翌年',
  prevYearRangeAriaLabel: '前年範囲',
  nextYearRangeAriaLabel: '翌年範囲',
  closeButtonAriaLabel: '閉じる',

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

export const CalendarInlineExample: React.FunctionComponent<ICalendarInlineExampleProps> = (
  props: ICalendarInlineExampleProps,
) => {
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
    // const newSelectedDate = addDays(dateRangeArray.pop()!, 1);
    const newSelectedDate = addDays(dateRangeArray.pop(), 1);

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
          Selected date(s): <span>{!selectedDate ? 'Not set' : selectedDate.toLocaleString()}</span>
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
        /*
         * ユーザーが日を選択するときに選択する必要がある日数を示す日付範囲タイプ
         */
        dateRangeType={props.dateRangeType}
        /*
         *  選択した日付に応じて、月ビューが次または前の日付範囲に自動的に移動するかどうか。
         * このプロパティがtrueに設定されていて、現在表示されている月が2017年3月の場合、
         * ユーザーがその月以外の日、つまり4月1日をクリックすると、ピッカーは自動的に4月に移動します。
         */
        autoNavigateOnSelection={props.autoNavigateOnSelection}
        showGoToToday={props.showGoToToday}
        // value={selectedDate!}
        value={selectedDate}
        /*
         * ロケールの週の最初の日。
         */
        firstDayOfWeek={props.firstDayOfWeek ? props.firstDayOfWeek : DayOfWeek.Sunday}
        strings={dayPickerStrings}
        highlightCurrentMonth={props.highlightCurrentMonth}
        highlightSelectedMonth={props.highlightSelectedMonth}
        isDayPickerVisible={props.isDayPickerVisible}
        showMonthPickerAsOverlay={props.showMonthPickerAsOverlay}
        showWeekNumbers={props.showWeekNumbers}
        /*
         * 設定されている場合、カレンダーはこの値より前の日付へのナビゲーションまたは選択を許可しません。
         */
        minDate={props.minDate}
        /*
         * 設定されている場合、カレンダーはこの値より後の日付へのナビゲーションまたは選択を許可しません。
         */
        maxDate={props.maxDate}
        restrictedDates={props.restrictedDates}

        /*
         * カレンダーにデフォルトで6週間を表示するかどうか。
         */
        showSixWeeksByDefault={props.showSixWeeksByDefault}
        workWeekDays={props.workWeekDays}
      />
      {props.showNavigateButtons && (
        <div>
          <DefaultButton
            style={buttonStyle}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={goPrevious}
            text="前"
          />
          <DefaultButton
            style={buttonStyle}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={goNext}
            text="次"
          />
        </div>
      )}
    </div>
  );
};

