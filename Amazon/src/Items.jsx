import React from 'react'
import Product from './Product'

import iPhone15 from '../img/random/iphones.png'
import chelseaboots from '../img/items/chelseaBoots.png'
import nikecap from '../img/items/nikeCap.png'
import beanbag from '../img/items/beamBag.png'
import sofa from '../img/items/luxuryChair.png'
import bomberjacket from '../img/items/bomberJacket.png'
import lvbag from '../img/items/lvBag.png'
import nikeshoes from '../img/random/shoes.png'

export default function Items() {
  return (
    <div className='items'>
      <Product imgPath={iPhone15} name="iPhone 15" desc="6GB-Ram | 256GB-Storage" price="$1000" />
      <Product imgPath={chelseaboots} name="Chelsea Boots" desc="Original leather boots" price="$120" />
      <Product imgPath={nikecap} name="Nike Cap" desc="Nike black cap" price="$50" />
      <Product imgPath={bomberjacket} name="Bomber Jacket" desc="Nike black cap" price="$50" />
      <Product imgPath={sofa} name="Sofa" desc="Nike black cap" price="$50" />
      <Product imgPath={beanbag} name="Bean Bag" desc="Nike black cap" price="$50" />
      <Product imgPath={lvbag} name="LV Bag" desc="Nike black cap" price="$50" />
      <Product imgPath={nikecap} name="LV Bag" desc="Nike black cap" price="$50" />
      <Product imgPath={nikeshoes} name="LV Bag" desc="Nike black cap" price="$50" />
      <Product imgPath={nikecap} name="LV Bag" desc="Nike black cap" price="$50" />
      <Product imgPath={nikecap} name="LV Bag" desc="Nike black cap" price="$50" />
      <Product imgPath={nikecap} name="LV Bag" desc="Nike black cap" price="$50" />
    </div>
  )
}
