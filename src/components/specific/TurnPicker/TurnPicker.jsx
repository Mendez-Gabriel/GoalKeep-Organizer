import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { ThemeProvider, createTheme } from '@mui/material';

const TurnPicker = ({ setStart, setEnd, setDay, disabledTurns }) => {

  const [disabledTimeRanges, setDisabledTimeRanges] = useState([]);

  const updateDisabledTimeRanges = () => {
    const defaultDisabledTimeRanges = [
      { start: '00', end: '09' },
      { start: '22', end: '24' },
    ];
    disabledTurns.forEach((turn) => defaultDisabledTimeRanges.push(turn.hour));
    setDisabledTimeRanges(defaultDisabledTimeRanges);
  };




  const shouldDisableTime = (time) => {
    const formattedTime = time.format('HH');
    return disabledTimeRanges.some(
      (range) => formattedTime > range.start && formattedTime < range.end
    );
  };

  useEffect(() => {
    updateDisabledTimeRanges();
  }, [disabledTurns, setDay]);

  const newTheme = (theme) => createTheme({
    ...theme,
    components: {
      MuiPickersDay: {
        styleOverrides: {
          root: {
            color: '#1e1e1e',
            fontWeight:700,
            borderRadius: 20,
            borderWidth: 0,
            borderColor: '#e91e63',
            border: '0px solid',
            backgroundColor: '#61bc84'
          }
        }
      },
      MuiDateCalendar: {
        styleOverrides: {
          root: {
            color: '#FFFFFF',
            borderRadius: 2,
            backgroundColor: '#454545',
            border: '4px solid #61bc84',
            boxShadow: '-5px 5px 0px 0px #2E8B57'
          }
        }
      },
      MuiDayCalendar: {
        styleOverrides: {
          weekDayLabel: {
            color: '#FFFFFF'
          }
        }
      }
    }
  })
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='row justify-content-center col-12 mx-0 gap-5'>
        <ThemeProvider theme={newTheme}>
          <DatePicker
            className='col-12 col-md-6'
            label={'Fecha de Turno'}
            onChange={(newValue) => setDay(newValue.format('YYYY-MM-DD'))}
            format='DD/MM/YYYY'
            slotProps={{
              openPickerButton: { color: 'success' },
              textField: {
                variant: 'filled',
                focused: true,
                color: 'success',
              },
            }}
            disablePast
          />
        <DesktopTimePicker
          className='col-12 col-md-6'
          views={['hours']}
          label={'Hora de Inicio'}
          onChange={(newValue) => setStart(newValue.$H)}
          shouldDisableTime={shouldDisableTime}
          ampm={false}
          slotProps={{
            openPickerButton: { color: 'success' },
            textField:{
            variant:'filled',
            color: 'success',
            focused: true,
            InputProps:{color:'success'}
          }
        }} 
        />
        <DesktopTimePicker
          className='col-12 col-md-6'
          views={['hours']}
          label={'Hora de Fin'}
          onChange={(newValue) => setEnd(newValue.$H)}
          shouldDisableTime={shouldDisableTime}
          ampm={false}
          slotProps={{
            openPickerButton: { color: 'success' },
            textField:{
            variant:'filled',
            color: 'success',
            focused: true
          }}} 
        />
        </ThemeProvider>
      </div>
    </LocalizationProvider>
  );
}

export default TurnPicker