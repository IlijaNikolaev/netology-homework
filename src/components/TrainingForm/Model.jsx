class Model {
  constructor(date,distance) {
  this.id = date.split('.').reverse().join('')
  this.date = date
  this.distance = distance
  }
}

export default Model