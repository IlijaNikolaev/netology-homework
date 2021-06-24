const News = ({news}) => {
    return (
        <div>
            {news.map(item => {
                return (
                    <div key={item.text} className="d-flex">
                        <img src={item.image} alt="..." style={{width:'20px',height:'20px', borderRadius:'100%'}}/>
                        <p className="ml-2 mb-1">{item.text}</p>
                    </div>
                )
            })}
        </div>

    )
}
export default News