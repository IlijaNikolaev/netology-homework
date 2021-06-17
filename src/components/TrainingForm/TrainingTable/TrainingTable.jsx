const TrainingTable = ({trainings, onRemove}) => {

  const removeTraining = (id) => {
    onRemove(id)
  }

  return (
    <table>
      <thead>
      <tr>
        <td>Дата</td>
        <td>Дистанция</td>
        <td>Действия</td>
      </tr>
      </thead>
      <tbody className="table">
      {
        trainings.sort(function (a,b){
        return   a.id - b.id
        })
          .map(training => {
          return (
            <tr key={training.id}>
              <td>{training.date}</td>
              <td>{training.distance}</td>
              <td>
                <button onClick={() => removeTraining(training.id)}>x</button>
              </td>
            </tr>
          )
        })
      }
      </tbody>
    </table>
  )
}

export default TrainingTable