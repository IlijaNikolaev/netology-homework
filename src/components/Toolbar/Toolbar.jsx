import './index.scss'

const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <div className="toolbar">
      {filters.map(item => {
        return (
          <button onClick={onSelectFilter} className={`${selected === item && 'filter-btn--checked'} filter-btn`}>
            {item}
          </button>)
      })}
    </div>
  )
}

export default Toolbar