import {useState} from "react";
import Model from "./Model";

import TrainingTable from "./TrainingTable/TrainingTable";

import './index.scss'

const TrainingForm = () => {
  const INITIAL_VALUE = {
    distance: '',
    date: ''
  }

  let [formState, setFormState] = useState(INITIAL_VALUE)
  let [training, setTraining] = useState([])

  const onInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value
    setFormState(
      prevState => ({...prevState, [name]: value})
    )
  }

  const filterTrainings = values => {
    setTraining(prevValues => {
      prevValues.map((elem) => {
        if (elem.date === values.date) {
          values.distance = (+elem.distance + +values.distance)
          prevValues.splice(prevValues.indexOf(elem), 1);
        }
      })
      return ([...prevValues, values]);
    });
  };

  const removeTraining = (id) => {
    setTraining(prevState => prevState.filter(training => training.id !== id))
  }


  const onFormSubmit = (event) => {
    event.preventDefault()
    const training = new Model(formState.date, formState.distance);
    filterTrainings(training)
    setFormState(INITIAL_VALUE)
  }
  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <div><label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input className="form__input" name="date" id="date" type="text" value={formState.date}
                 onChange={onInputChange}/>
        </div>
        <div><label htmlFor="distance">Пройдено км</label>
          <input className="form__input" name="distance" id="distance" type="text" value={formState.distance}
                 onChange={onInputChange}/>
        </div>
        <button className="form__submit" type="submit">ОК</button>
      </form>
      <TrainingTable trainings={training} onRemove={removeTraining}/>
    </>
  )
}

/* Прошу уточнить, по возможости, можно ли вообще стейт вот так передавать, и можно ли передать не функцию а сразу сеттер от стейта?*/

export default TrainingForm