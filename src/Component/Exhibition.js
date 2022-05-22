import React from 'react';
import OwlCarouselSlider from '../HOC_Component/OwlCarouselSlider';
import {newArrival} from '../Database/Database';

export default function Exhibition({pHead}) {
  return (
    <div className='Hm_Exhibition'>
      {pHead}
      <div className='container'>
      <OwlCarouselSlider itemData={newArrival} viewItem={3}/>
    </div>
    </div>
  )
}
