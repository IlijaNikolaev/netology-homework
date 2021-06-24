const Widget = (props) => {
    return (
        <div className="col-3">
            <h3 style={{color: 'blue'}} className="mb-1">{props.title}</h3>

            {typeof (props.children) === 'function' ?
                <div className={props.className}>
                    {props.children(props.items)}
                </div> :
                props.children
            }
        </div>

    )
}
export default Widget