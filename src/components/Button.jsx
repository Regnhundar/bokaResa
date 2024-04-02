

function Button(props) {
  return (
    <input className={props.bClass} type="button" value={props.name} onClick={props.onClick}/>
  )
}

export default Button