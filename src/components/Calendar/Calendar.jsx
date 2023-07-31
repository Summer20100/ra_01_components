import s from './Calendar.module.css'
import { Route, Routes } from 'react-router-dom'

const Calendar = ({now}) => {
 
  let currentWeekDay = [6, 0, 1, 2, 3, 4, 5][now.getDay()];

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
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
    monthNumber: {
      January: 0,
      February: 1,
      March: 2,
      April: 3,
      May: 4,
      June: 5,
      July: 6,
      August: 7,
      September: 8,
      October: 9,
      Novermber: 10,
      December: 11
  },
    weekDaysFromMonday: [6, 0, 1, 2, 3, 4, 5],
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    weekDayFullNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье',
    ]
  }

  const DAYS_IN_WEEK = 7;

  const getDayOfWeek = (date) => {
    const dayOfWeek = date.getDay();
    return data.weekDaysFromMonday[dayOfWeek];
  }

  const getMonthData = (year, month) => {     
    const result = [];

    const date = new Date(year, month)
    const daysInMonth = getDaysInMonth(date)

    const monthStartsOn = getDayOfWeek(date)

  
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
      result[i] = [];

      for (let j = 0; j < DAYS_IN_WEEK; j++) {
        if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
          result[i][j] = undefined;
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
