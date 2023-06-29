import React from 'react'
import './tableLegend.css'
const TableLegend = () => {
  return (
    <div className='tableLegend'>
        <div className='alkaliMetals'>Alkali Metals</div>
        <div className='alkalineEarthMetals'>Alkaline Earth Metals</div>
        <div className='lanthanides'>Lanthanides</div>
        <div className='actinides'>Actinides</div>
        <div className='transitionMetals'>Transition Metals</div>
        <div className='postTransitionMetals'>Post-Transition Metals</div>
        <div className='metalloids'>Metalloids</div>
        <div className='otherNonmetals'>Other Nonmetals</div>
        <div className='nobleGases'>Noble Gases</div>
    </div>
  )
}

export default TableLegend