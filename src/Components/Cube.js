import './cube.css';
import { getColorByCategory } from '../Services/utils';

const Cube =(props) => {

  const {name,atomic_mass,category,number,phase,symbol,xpos,ypos,source} = props.element;
    return ( 
      <div onClick={()=>window.location.href = source} style={{
        border:`2px solid ${getColorByCategory(category)}`
    }} className = "Cube-Container" >
        <small>{number}</small>
        <strong>{symbol}</strong>
        <small>{atomic_mass.toFixed(2)}</small>
      </div>
    )
}

export default Cube;