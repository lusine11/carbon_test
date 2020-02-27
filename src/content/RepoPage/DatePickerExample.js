import React from "react";
import { DatePicker, DatePickerInput } from 'carbon-components-react';

const DatePickerExample = () => (
    <DatePicker dateFormat="m/d/Y" datePickerType="single">
        <DatePickerInput
            id="date-picker-calendar-id"
            placeholder="mm/dd/yyyy"
            labelText="Date Picker label"
            type="text"
        />
    </DatePicker>
);

export default DatePickerExample;