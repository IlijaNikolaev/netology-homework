const NewsTabs = ({tabs}) => {
    return (
        <div className="d-flex align-items-center">
            {tabs.map(tab => <p key={tab} className="h4 m-0 mr-4">{tab}</p>)}
            <p className="m-0">31 июля 1999 года</p>
        </div>
    )
}

export default NewsTabs