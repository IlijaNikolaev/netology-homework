import 'material-design-icons/iconfont/material-icons.css'

const IconSwitch = (props) => {
  return (
    <button  onClick={props.onChange} style={{marginLeft: 'auto', display: 'block', color:'gray', background:'none', border:'none'}}>
      <span className="material-icons" style={{fontSize: '30px'}}>
        {props.icon}
      </span>
    </button>)
}

export default IconSwitch;