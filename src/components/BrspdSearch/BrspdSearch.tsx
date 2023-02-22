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
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import './BrspdSearch.scss';
import InputAdornment from '@mui/material/InputAdornment';;
import { Button } from '@mui/material';


export interface SearchProps {
  label?: string;
  error?: boolean;
  isRequired?: boolean;
  isTooltip?: boolean;
  errorMessage?: string;
  onClick?: () => void;
  handleChange?: () => void;
}

const BrspdSearch = ({ label, error, isRequired = false, errorMessage, isTooltip = false, ...props }:SearchProps) => {

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
        <FormControl variant="outlined">
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end" >
                <Button  color = 'inherit' 
                onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}> 
                   <SearchIcon/>
                   </Button>
              </InputAdornment>
            }
          />
        </FormControl> 
        {isTooltip ? <Tooltip title="Info" placement="right">
          <img src={InfoIcon} className='img-info-small' />
        </Tooltip> : ''}
      </Box>
      <span>{error && isRequired && (<div style={{ display: 'flex', marginTop: 14 }}> <img src={ErrorIcon} className='error-img' /> <FormHelperText className='error-text'>{errorMessage}</FormHelperText></div>)}</span>
    </>
  );

};


export default BrspdSearch;