const { Turn } = require('../../services/index.service.js');
const turnService = new Turn();
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
    const turnRetrieved = await turnService.getTurn(id);
    res.status(200).json(
      turnRetrieved.dataValues // Ya adapté el adaptador
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
    let turnBody = await turnService.getTurn(idTurn);
    turnBody.notification_id = idNotification;
    const newTurn = await turnService.updateTurn(idTurn, turnBody).turnBody;
    console.log(newTurn)

    //Timer que envía una notificación TODO
      // const intervalId = setInterval(() => {
      //   console.log(`Faltan ${newTurn.asd} segundos para mandar la notificaicón`);
      //   if ()
      // }, 1000);
    //

    res.status(200).json(
      newTurn.turnBody,
    );
  } catch (error) {
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
