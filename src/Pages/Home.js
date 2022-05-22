import React from 'react'
import Carousel from '../Component/MainSlider';
import Exhibition from '../Component/Exhibition';
import NewArrival from '../Component/NewArrival';
import SampleArt from '../Component/SampleArt';
import PageHeading from '../HOC_Component/PageHeading';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import CollectionsIcon from '@mui/icons-material/Collections';

export default function Home() {
  return (
    <div className='Home'>
      <Carousel />
     {/* <div className='container'> */}
      <NewArrival pHead={<PageHeading value="New Arrival" icon={<FiberNewIcon />}/>}/>
      <SampleArt pHead={<PageHeading value="Sample Art" icon={<CollectionsIcon />}/>}/>
      <Exhibition pHead={<PageHeading value="Exhibition" icon={<CollectionsIcon />}/>}/>
{/* </div> */}
    </div>
  )
}
