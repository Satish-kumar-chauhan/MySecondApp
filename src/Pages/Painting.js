import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import TransferList from '../Component/ImageList';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useParams } from 'react-router-dom';
import {allPaintings} from '../Database/AllPaintingsDB'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Painting({pHead}) {
  const { param } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [currentItems, setCurrentItems] = React.useState(
    allPaintings.filter((item) => item.type === param)
  );
  React.useEffect(() => {
    setCurrentItems(allPaintings.filter((item) => item.type === param));
  }, [param]);
  const handleFiltering = (v) => {
    let i = 0;
    const arr = [];
    for (let i = 0; i < allPaintings.length; i++) {
      for (let j = 0; j < v.length; j++) {
        if (allPaintings[i].type === v[j]) {
          arr.push(allPaintings[i]);
        }
      }
    }
    return arr;
  };

  const handleCurrentItems = (value) => {
    const filteredItems =
      value.length !== 0 ? handleFiltering(value) : allPaintings;
    setCurrentItems(filteredItems);
  };
  return (
    <div className='PageBody PaintingGallery'>
       {pHead}
    {/* <div className='container'> */}
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={2} xs={12}>
            <Item className="PaintingFilterCardMain">
              {isMobile ? (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<FilterListIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Filter</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <TransferList handleCurrentItems={handleCurrentItems} />
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ) : (
                <TransferList handleCurrentItems={handleCurrentItems} />
              )}
            </Item>
          </Grid>
          <Grid item md={10} xs={12}>
            <Item>
              <Box sx={{ height: 450, overflowY: 'scroll' }}>
                <ImageList  cols={isMobile ? 2 : 3} gap={8}>
                  {currentItems.map((item, index) => (
                    <ImageListItem key={index} id={item.id}>
                      <img
                        src={`${item.imgSrc}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.imgSrc}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <div className="pLabel">
                        <p>{item.name} {item.type}</p>
                      </div>
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    {/* </div> */}
    </div>

  )
}
