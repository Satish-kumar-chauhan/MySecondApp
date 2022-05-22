import React from 'react';
import OwlCarouselSlider from '../HOC_Component/OwlCarouselSlider';
import {newArrival} from '../Database/Database';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'

export default function SampleArt({pHead}) {
  return (
      <div className='SampleArt'>
        {pHead}
        <div className='container'>
          <div className='py-2'>
        <OwlCarouselSlider itemData={newArrival} viewItem={5}/>
        </div>
        <Link className='ViewAllItem btn btn-primary' to='/painting'>View All Items</Link>
        </div>
      </div>
  )
}
