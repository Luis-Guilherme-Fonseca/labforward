
var db = require('../mockDB/index')

exports.list_experiments = function(req, res) {
  try {
    const experiments = db.map(experiment => ({id: experiment.id, name: experiment.name}))

    res.json(experiments)
  } catch {
    res.send('An error happened while trying to get your experiments, please try again later')
  }
}

exports.get_experiment = function(req, res) {
  try {
    const experiment = db.find(item => item.id.toString() === req.params.experimentId)

    if(experiment === undefined) {
      res.send("We could not find the experiment you're searching for.")
    } else {
      res.json(experiment)
    }
  } catch {
    res.send("An error occurred while searching for your request.")
  }
}