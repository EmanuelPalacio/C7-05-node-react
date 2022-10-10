const { Turn } = require('../../services/index.service.js');
const turnService = new Turn();
const onesignal = require('../../middlewares/one-signal')

exports.createTurn = async (req, res, next) => {
  const turn = req.body;
  try {
    const turnToCreate = await turnService.createTurn(turn);
    const { status } = turnToCreate;
    res.status(status).json({
      turnToCreate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateTurn = async (req, res, next) => {
  try {
    const id = req.params.id;
    const turnBody = req.body;
    const turnToUpdate = await turnService.updateTurn(id, turnBody);
    console.log(turnToUpdate);
    const { status } = turnToUpdate;
    res.status(status).json({
      turnToUpdate,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getTurns = async (req, res, next) => {
  try {
    const turnsRetrieved = await turnService.getTurns();
    const { status } = turnsRetrieved;
    res.status(status).json({
      turnsRetrieved,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.getTurn = async (req, res, next) => {
  const id = req.params.id;
  try {
    const turn = await turnService.getTurn(id);
    const {status, turnRetrieved} = turn;
    console.log(turnRetrieved)
    res.status(status).json(
      turnRetrieved // Ya adapté el adaptador
    );
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.registerNotificationId = async (req, res, next) => {
  const idTurn = req.params.id;
  const idNotification = req.body.id;
  
  try {
    let turnBody = await turnService.getTurn(idTurn); //Obtengo el turno de la base de datos
    turnBody = turnBody;
    if (turnBody.notification_id !== idNotification){ //Me fijo si ya está vinculada la id de la notificación
      turnBody.notification_id = idNotification;
      let newTurn = await turnService.updateTurn(idTurn, turnBody);
      newTurn = newTurn;
      let timeout = new Date(newTurn.turn_date);
  
      //Timer que envía una notificación TODO
      const intervalId = setInterval(async () => {
        let turn = await turnService.getTurn(idTurn); //Reviso el backend a ver si el objeto cambió
        turn = turn.turnRetrieved;
        timeout = new Date(turn.turn_date)
        if (turn.turn_date !== turnBody.turn_date){ //Comparo mi fecha actual con la que obtuve del backend
          timeout = new Date(turn.turn_date) //Actualizo la fecha del timeout a la nueva.
        }
        let timeleft = Math.ceil(((timeout - new Date()) / 1000)); //TODO cambiar resta de objetos DATE a milisegundos
        if (timeleft < 5 || !turn.is_active){
          onesignal.crearNotificacion(idNotification);
          clearInterval(intervalId);
        }
      }, 1000 * 1);
      //
      res.status(200).json(
        newTurn,
      );
    }else{
      res.status(200);
    }

  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      message: error.message,
    });
  }
};
exports.deleteTurn = async (req, res, next) => {
  const id = req.params.id;
  try {
    const turnRetrieved = await turnService.deleteTurn(id);
    const { status } = turnRetrieved;
    res.status(status).json({
      turnRetrieved,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
