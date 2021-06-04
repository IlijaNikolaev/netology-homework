import './index.scss'

const ProjectList = ({projects}) => {
  return (
    <div className="item-list">
      {
        projects.map(project => {
          return (
            <div className="item">
              <img className="item__img" src={project.img} alt=""/>
            </div>)
        })
      }
    </div>
  )
}

export default ProjectList