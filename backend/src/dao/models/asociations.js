<<<<<<< HEAD
const Food = require('./Food');
const Turn = require('./Turn');

Food.hasMany(Turn, {foreignKey:'food_id', as:'optionFoodName'});
Turn.belongsTo(Food, {foreignKey:'food_id'})
=======
//Aca irian las asociaciones de tablas
>>>>>>> capas
