import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './BrspdTabPanel.scss';

export interface TabPanelProps {
  tabLabel?: string [];
}
 
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BrspdTabPanel( {tabLabel=[] , ...props }:TabPanelProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='tab-panel-box'>
    <Box sx={{ width: '100%' }}>
      <Box >
        <Tabs value={value} onChange={handleChange}  >
         { tabLabel.map((label , index ) => {
            return (
              <Tab label={label} {...a11yProps(index)} className='tab-panel-tab' />
            );
          })}
        </Tabs>
      </Box>

    </Box>
    </div>
  );
}