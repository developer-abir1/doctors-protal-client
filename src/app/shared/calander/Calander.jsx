import React from 'react'; 
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
const Calander = ({date , setDate}) => {
    // const [value, setValue] = React.useState(new Date());
 

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}    >
            <StaticDatePicker
          
                displayStaticWrapperAs="desktop"
                openTo="day"
                value={date}
              
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default Calander;