'use strict';
module.exports = function(app) {
  var experiment = require('../controllers/experiments');

  app.route('/experiments')
    .get(experiment.list_experiments)


  app.route('/experiment/:experimentId')
    .get(experiment.get_experiment)
};
