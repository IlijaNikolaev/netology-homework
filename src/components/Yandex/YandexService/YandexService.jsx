const YandexService = ({service, ...otherProps}) => {
    console.log(otherProps)
    return(
        <>
            {service.map(element => {
                return(
                    <div key={element.title}  {...otherProps}>
                        <img style={{maxWidth:'100px'}} src={element.image} alt={element.title}/>
                        <p style={{color:'blue'}} className="h5 m-0 mt-3">{element.title}</p>
                        <p className='m-0'>{element.subtitle}</p>
                    </div>
                )
            })
            }
        </>
    )
}

export default YandexService