import { SyntheticEvent, useState } from 'react';

import { Tab, Tabs } from '@mui/material';
import Box from '@mui/material/Box';

import MCTabPanel from './mc-tab-panel';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export default function MCTabs() {
  const [ value, setValue ] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <MCTabPanel value={value} index={0}>
        Item One
      </MCTabPanel>
      <MCTabPanel value={value} index={1}>
        Item Two
      </MCTabPanel>
      <MCTabPanel value={value} index={2}>
        Item Three
      </MCTabPanel>
    </Box>
  );
}
