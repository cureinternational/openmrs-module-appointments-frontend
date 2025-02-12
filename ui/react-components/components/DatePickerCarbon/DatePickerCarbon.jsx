import React from "react";
import PropTypes from "prop-types";
import {DatePicker, DatePickerInput} from "carbon-components-react";
import moment from "moment";
import Title from "../Title/Title.jsx";
const DatePickerCarbon = props => {

    const {onChange, value, title, minDate, testId, width, isDisabled, isRequired, showWarning, intl} = props;
    let defaultTime = value;
    if( value && value instanceof moment){
        defaultTime = new Date(value.toISOString());
    }
    let titleText=  title && <Title text={title} isRequired={isRequired}/>
    const warningText = intl.formatMessage({
        id: 'PUBLIC_HOLIDAY_WARNING',
        defaultMessage: 'Date selected is a Public Holiday',
    });
    return (
        <div data-testid={testId || "datePicker"}>
            <DatePicker datePickerType={"single"} onChange={onChange} disabled={isDisabled} minDate={minDate} value={defaultTime} dateFormat={"d/m/Y"}>
                <DatePickerInput
                    id={"Appointment Date"}
                    placeholder={"dd/mm/yyyy"}
                    labelText={titleText}
                    size={"md"}
                    style={{width: width || "250px"}}
                    autoComplete={"off"}
                    disabled={isDisabled}
                    required={isRequired}
                    warn={showWarning}
                    warnText={warningText}
                />
            </DatePicker>
        </div>

    );
};

DatePickerCarbon.propTypes = {
    onChange: PropTypes.func,
    width: PropTypes.string,
    title: PropTypes.string,
    testId: PropTypes.string,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
    showWarning: PropTypes.bool,
};

export default DatePickerCarbon;
