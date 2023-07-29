import s from './Calendar.module.css'
import { Route, Routes } from 'react-router-dom'

const Calendar = (props) => {
  const now = new Date()
  let currentWeekDay = [0, 1, 2, 3, 4, 5, 6][now.getDay()];

  Date.prototype.daysInMonth = function() {
    return 33 - new Date(this.getFullYear(), this.getMonth(), 33).getDate();
  };

  const isLeapYear = (year) => {
    return !((year % 4) || (!(year % 100) && (year % 400)))
  }

  const getDaysInMonth = (date) => {
    if (isLeapYear(now.getFullYear()) && data.month === 1) {
      return now.daysInMonth() + 1;
    } else {
      return now.daysInMonth();
    }
  }

  let data = {
    currentDate: now,
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate(),
    weekDay: now.getDay(),
    daysInMonth: getDaysInMonth(now),
    currentWeekDay,
    monthNames: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ],
    weekDayNames: [
      'Пн',
      'Вт',
      'Ср',
      'Чт',
      'Пт',
      'Сб',
      'Вс'
    ],
    weekDayFullNames: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
    ]
  }

  let previousMonth = ((new Date()).getMonth() - 1) < 0 ? 11 : (new Date()).getMonth() - 1;
  let previousYear = (previousMonth === 11) ? (new Date()).getFullYear() - 1 : (new Date()).getFullYear();
  let previousMonthDays = new Date(previousYear, previousMonth + 1, 0).getDate();
  previousMonthDays = Array.from({ length: previousMonthDays }, (_, i) => i + 1);
  previousMonth++;

  let nexMonth = ((new Date()).getMonth() + 1) > 12 ? 0 : (new Date()).getMonth() + 1;
  let nexYear = (nexMonth === 12) ? (new Date()).getFullYear() + 1 : (new Date()).getFullYear();
  let nexMonthDays = new Date(nexYear, nexMonth - 1, 0).getDate();
  nexMonthDays = Array.from({ length: nexMonthDays }, (_, i) => i + 1);
  nexMonth++;

  console.log(previousMonthDays.length);
  console.log(nexMonthDays.length);

  const DAYS_IN_WEEK = 7;

  const getMonthData = (year, month) => {
    const result = [];
    let day = 1;

    for (let i = 0; i < (data.daysInMonth + currentWeekDay) / DAYS_IN_WEEK; i++) {
      result[i] = [];

      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        if ((i === 0 && j < currentWeekDay) || day > data.daysInMonth) {
          result[i][j] = new Date(year, month - 1, day--);
        } else {
          result[i][j] = new Date(year, month, day++);
        }
      }
    }
    return result;
  }

  const monthData = getMonthData(data.year, data.month);

  return (
    <Routes>
      <Route path='/calendar' element={
        <div className={s.container}>
          <div className={s.uiDatepicker}>
            <div className={s.uiDatepickerMaterialHeader}>
              <div className={s.uiDatepickerMaterialDay}>{data.weekDayFullNames[data.currentWeekDay]}</div>
              <div className={s.uiDatepickerMaterialDate}>
                <div className={s.uiDatepickerMaterialDayNum}>{data.day}</div>
                <div className={s.uiDatepickerMaterialMonth}>{data.monthNames[data.month]}</div>
                <div className={s.uiDatepickerMaterialYear}>{data.year}</div>
              </div>
            </div>
            <div className={s.uiDatepickerHeader}>
              <div className={s.uiDatepickerTitle}>
                <span className={s.uiDatepickerMonth}>{data.monthNames[data.month]}</span>&nbsp;<span className={s.uiDatepickerYear}>{data.year}</span>
              </div>
            </div>
            <table className={s.uiDatepickerCalendar}>
              <colgroup>{data.weekDayNames.map(colorDay =>
                <col className={(colorDay) === 'Сб' || (colorDay) === 'Вс' ? s.uiDatepickerWeekEnd : ''} key={colorDay} />
              )}
              </colgroup>
              <thead>
                <tr>{data.weekDayNames.map(name =>
                  <th scope="col" key={name} title={data.weekDayFullNames}>{name}</th>
                )}
                </tr>
              </thead>
              <tbody>{monthData.map((week, index) =>
                <tr key={index} className="week">
                  {week.map((day, index) => day ?
                    <td
                      key={index}
                      className={(day.getDate() === data.day) ? s.uiDatepickerToday : 'null'}
                    >{day.getDate()}</td>
                    :
                    <td key={index} />
                  )}
                </tr>
              )}

                {/* <td className={s.uiDatepickerOtherMonth}>1</td>
                  <td className={s.uiDatepickerOtherMonth}>2</td> */}

              </tbody>
            </table>
          </div>
        </div>
      } />
    </Routes>
  )
}

export default Calendar






// const DAYS_IN_WEEK = 7;

// const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

// const Month = {
//     January: 0,
//     February: 1,
//     March: 2,
//     April: 3,
//     May: 4,
//     June: 5,
//     July: 6,
//     August: 7,
//     September: 8,
//     October: 9,
//     Novermber: 10,
//     December: 11
// };

// export function areEqual(a, b) {
//     if (!a || !b) return false;

//     return (
//         a.getFullYear() === b.getFullYear() &&
//         a.getMonth() === b.getMonth() &&
//         a.getDate() === b.getDate()
//     );
// }

// export function isLeapYear(year) {
//     return !((year % 4) || (!(year % 100) && (year % 400)));
// }

// export function getDaysInMonth(date) {
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const daysInMonth = DAYS_IN_MONTH[month];

//     if (isLeapYear(year) && month === Month.February) {
//         return daysInMonth + 1;
//     } else {
//         return daysInMonth;
//     }
// }

// export function getDayOfWeek(date) {
//     const dayOfWeek = date.getDay();

//     return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
// }

// export function getMonthData(year, month) {
//     const result = [];
//     const date = new Date(year, month); // currentDate
//     const daysInMonth = getDaysInMonth(date); //  daysInMonth
//     const monthStartsOn = getDayOfWeek(date); //  currentWeekDay
//     let day = 1;

//     for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
//         result[i] = [];

//         for (let j = 0; j < DAYS_IN_WEEK; j++) {
//             if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
//                 result[i][j] = undefined;
//             } else {
//                 result[i][j] = new Date(year, month, day++);
//             }
//         }
//     }
//     return result;
// }

// const monthData = getMonthData(data.year, data.month);
