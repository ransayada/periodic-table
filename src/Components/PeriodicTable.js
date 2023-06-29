import React from 'react'
import './periodicTable.css';
import data from '../PeriodicTableJSON.json'
import Cube from './Cube';

const PeriodicTable = () => {
  return (
    <div className='periodic-table'>
        {data.elements.map((element) => <div key={element.name} style={{
            gridColumn: element.xpos,
            gridRow: element.ypos
        }}><Cube element={element}/></div>)}
        </div>
  )
}

export default PeriodicTable