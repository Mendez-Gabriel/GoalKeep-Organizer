import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const TurnPicker = ({ setStart, setEnd, setDay, disabledTurns }) => {

  // const disabledTimeRanges = [
  //   { start: '00', end: '09' },
  //   { start: '22', end: '00' },
  // ];

  // disabledTurns.forEach((turn) => {
  //   disabledTimeRanges.push({
  //     start: turn.hour,
  //     end: turn.hour,
  //   });
  // });
  

  const [disabledTimeRanges, setDisabledTimeRanges] = useState([]);

  useEffect(() => {
    updateDisabledTimeRanges();
  }, [disabledTurns, setDay]);

  const updateDisabledTimeRanges = () => {

    const defaultDisabledTimeRanges = [
      { start: '00', end: '09' },
      { start: '22', end: '24' },
    ];
    disabledTurns.forEach((turn)=>defaultDisabledTimeRanges.push(turn.hour));
    setDisabledTimeRanges(defaultDisabledTimeRanges);
  };




  const shouldDisableTime = (time) => {
    const formattedTime = time.format('HH');


    return disabledTimeRanges.some(
      (range) => formattedTime >= range.start && formattedTime < range.end
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='row justify-content-center col-12 col-md-5 mt-5 py-5 mx-0 gap-5 bg-white'>
        <DatePicker
          className='col-12 col-md-6'
          label={'Fecha de Turno'}
          onChange={(newValue)=>setDay(newValue.format('YYYY-MM-DD'))}
          disablePast
        />
        <TimePicker
          className='col-12 col-md-6'
          views={['hours']}
          label={'Hora de Inicio'}
          onChange={(newValue)=>setStart(newValue.$H)}
          shouldDisableTime={shouldDisableTime}
          ampm={false}
        />
        <TimePicker
          className='col-12 col-md-6'
          views={['hours']}
          label={'Hora de Fin'}
          onChange={(newValue)=>setEnd(newValue.$H)}
          shouldDisableTime={shouldDisableTime}
          ampm={false}
        />
      </div>
    </LocalizationProvider>
  );
}

export default TurnPicker