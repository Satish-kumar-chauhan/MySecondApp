import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FilterExhibition from '../HOC_Component/FilterExhibition';
import {events} from '../Database/Database'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="EventsBox" sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function PaintingExhibition({pHead}) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='PageBody PaintingExhibition'>
      {pHead}
      <div className="container">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Upcoming" {...a11yProps(0)} />
              <Tab label="Current" {...a11yProps(1)} />
              <Tab label="Past" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <FilterExhibition exhName="Upcoming" exhData={events.upcoming} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FilterExhibition exhName="Current" exhData={events.current} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FilterExhibition exhName="Past" exhData={events.past} />
          </TabPanel>
        </Box>
      </div>
     </div>
  )
}
