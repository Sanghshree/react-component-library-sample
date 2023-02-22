import React, { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from "@mui/material/FormHelperText";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '../../images/Branding/09 Icon Library/PNG/info.png';
import ErrorIcon from '../../images/Branding/09 Icon Library/PNG/icon-alert.png';
import OutlinedInput from '@mui/material/OutlinedInput';
import './BrspdInputField.scss';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';


export interface InputFieldProps {
  label?: string;
  error?: boolean;
  inputType?: 'Password' | 'Number' | 'Email' | 'Phone Number' | 'Text';
  isRequired?: boolean;
  isTooltip?: boolean;
  errorMessage?: string;
  onClick?: () => void;
  handleChange?: () => void;
}

const BrspdInputField = ({ label, error, inputType = 'Text', isRequired = false, errorMessage, isTooltip = false, ...props }: InputFieldProps) => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
    <>
      <Box>
        {isRequired ? (<> <div style={{ display: 'flex' }}><InputLabel className='input-label' id='input-label'> {label}</InputLabel ><span style={{ color: 'red', fontSize: 14 }}>*</span> </div></>)
          : <InputLabel className='input-label' id='input-label'> {label}</InputLabel>}
        {inputType === 'Password' ? <FormControl variant="outlined">
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'Text' : 'Password'}
            endAdornment={
              <InputAdornment position="end" >
                <Button  color = 'inherit' 
                onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}> 
                   {showPassword ? <VisibilityOff /> : <Visibility />}
                   </Button>
              </InputAdornment>
            }
          />
        </FormControl> : <TextField
          required={isRequired}
          type={inputType}
          error={error}
          className='input-field' id='input-field'></TextField>}
        {isTooltip ? <Tooltip title="Info" placement="right">
          <img src={InfoIcon} className='img-info-small' />
        </Tooltip> : ''}
      </Box>
      <span>{error && isRequired && (<div style={{ display: 'flex', marginTop: 14 }}> <img src={ErrorIcon} className='error-img' /> <FormHelperText className='error-text'>{errorMessage}</FormHelperText></div>)}</span>
    </>
  );

};


export default BrspdInputField;