import React from 'react';
import OwlCarouselSlider from '../HOC_Component/OwlCarouselSlider';
import {newArrival} from '../Database/Database';
import Button from 'react-bootstrap/Button';

export default function SampleArt({pHead}) {
  return (
      <div className='SampleArt'>
        {pHead}
        <div className='container'>
          <div className='py-2'>
        <OwlCarouselSlider itemData={newArrival} viewItem={5}/>
        </div>
        <Button className='ViewAllItem'>View All Items</Button>
        </div>
      </div>
  )
}
