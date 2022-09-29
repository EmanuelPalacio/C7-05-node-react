const Food = require('./Food');
const Turn = require('./Turn');

Food.hasMany(Turn, {foreignKey:'food_id', as:'optionFoodName'});
Turn.belongsTo(Food, {foreignKey:'food_id'})