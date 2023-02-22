import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputBase from "@mui/material/InputBase";
import InputLabel from '@mui/material/InputLabel';
import Menu from "@mui/material/Menu";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from "@mui/material/MenuItem";
import { styled, Theme,useTheme } from "@mui/material/styles";
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@material-ui/core';
import Tooltip from '@mui/material/Tooltip';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '../../images/Branding/09 Icon Library/PNG/info.png';
import ErrorIcon from '../../images/Branding/09 Icon Library/PNG/icon-alert.png';
import './BrspdMultiSelectField.scss';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ReactMultiSelectCheckboxes ,{defaultDropdownButtonStyle} from 'react-multiselect-checkboxes';


const useStyles = (theme) => makeStyles((theme: Theme) => ({
  select: {
    fontWeight: 500,
    fontSize: `14px !important`,
    color: theme.palette.text.primary,
    border: `1px solid #999999`,
    borderRadius: 4,
    paddingLeft: "5px",
    minWidth: 215,
    maxHeight: 40,
    marginLeft: 4,
    textOverflow: 'ellipsis'
  },
}), { defaultTheme: theme });
const BootstrapInput = styled(InputBase)(({ theme }) => {
  return {
    label: {
      fontWeight: "500 !important",
      fontSize: "12px !important",
      color: "#000000 !important",
      opacity: "0.7 !important",
      minWidth: "40%",
      textAlign: "right",
      marginRight: "10px",
    },
  };
});

export interface MultiSelectFieldProps {
  label?: string;
  defaultValue?: string;
  error?: boolean;
  isRequired?: boolean;
  isMultiSelect?: boolean;
  isGrouped?: boolean;
  isTooltip?: boolean;
  errorMessage?: string;
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander'
];

export const colourOptions = [
  { value: "ocean1", label: "Ocean" },
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "forest", label: "Forest" },
  { value: "slate", label: "Slate" },
  { value: "silver", label: "Silver" }
];

function onChange(this: any, value, event) {
  if (event.action === "select-option" && event.option.value ===
    "*") {
    this.setState(this.options);
  } else if (event.action === "deselect-option" &&
    event.option.value === "*") {
    this.setState([]);
  } else if (event.action === "deselect-option") {
    this.setState(value.filter(o => o.value !== "*"));
  } else if (value.length === this.options.length - 1) {
    this.setState(this.options);
  } else {
    this.setState(value);
  }
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const BrspdMultiSelectField = ({
  defaultValue = 'Select',
  error,
  label,
  isRequired = false,
  isMultiSelect = false,
  isGrouped = false,
  isTooltip = false,
  errorMessage,
  ...props
}: MultiSelectFieldProps) => {
  const theme = useTheme();
  const classes = useStyles(theme)();

  const [personName, setPersonName] = useState<string[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <>
      {isRequired ? (<> <div style={{ display: 'flex' }}><InputLabel className='input-label' id='input-label'> {label}</InputLabel ><span style={{ color: 'red', fontSize: 14 }}>*</span> </div></>)
        : <InputLabel className='input-label' id='input-label'> {label}</InputLabel>}
      {isMultiSelect ? <ReactMultiSelectCheckboxes
     // className='multiselect-box'
     minWidth = '220px'
    className ='multiselect-box'
        options={[{ label: "All", value: "*" }, ...colourOptions]}
        value={selectedOptions}
        onChange={onChange}
        setState={setSelectedOptions}
      /> : isGrouped ? <Select native className={classes.select}
        required={isRequired}
        MenuProps={MenuProps}>
        <option aria-label="None" value="" />
        <optgroup label="Category 1">
          <option value={1}>Option 1</option>
          <option value={2}>Option 2</option>
        </optgroup>
        <optgroup label="Category 2">
          <option value={3}>Option 3</option>
          <option value={4}>Option 4</option>
        </optgroup>
      </Select>
        : <Select
          className={classes.select}
          required={isRequired}
          multiple={isMultiSelect}
          value={personName}
          onChange={handleChange}
          input={<BootstrapInput />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>}

      {isTooltip ? <Tooltip title="Info" placement="right">
        <img src={InfoIcon} className='img-info-small' />
      </Tooltip> : ''}
      <span>{error && isRequired && (<div style={{ display: 'flex', marginTop: 14 }}> <img src={ErrorIcon} className='error-img' /> <FormHelperText className='error-text'>{errorMessage}</FormHelperText></div>)}</span>
    </>
  );
};
export default BrspdMultiSelectField;