import React, { useState } from 'react';
import dayjs from 'dayjs';
import { DateCalendar, DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const TurnPicker = () => {
  
  const [startHour, setStartHour] = useState('');
  const [endingHour, setEndingHour] = useState('');
  const [day, setDay] = useState('')

  const disabledTimeRanges = [
    { start: '00', end: '09' },
    { start: '22', end: '00' },
  ];

  const shouldDisableTime = (time) => {
    const formattedTime = time.format('HH');


    return disabledTimeRanges.some(
      (range) => formattedTime >= range.start && formattedTime < range.end
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='w-100 row justify-content-center col-8 mt-5 py-5 mx-0 gap-5 bg-success'>
        <DatePicker
          className='col-12 col-md-8'
          label={'Fecha de Turno'}
          onChange={(newValue)=>setDay(newValue)}
          disablePast
        />
        <TimePicker
          className='col-12 col-md-6'
          views={['hours']}
          label={'Hora de Inicio'}
          onChange={(newValue)=>setStartHour(newValue.$H)}
          shouldDisableTime={shouldDisableTime}
          
        />
        <TimePicker
          className='col-12 col-md-6'
          views={['hours']}
          label={'Hora de Fin'}
          onChange={(newValue)=>setEndingHour(newValue.$H)}
          shouldDisableTime={shouldDisableTime}
          
        />
        <button onClick={()=>{
          console.log(day.format('DD-MM-YYYY'))
          console.log(startHour);
          console.log(endingHour);
        }}></button>
      </div>
    </LocalizationProvider>
  );
}

export default TurnPicker