const express = require('express');
const {celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)


//Valida se a ONG existe
routes.get('/ongs',celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  })
}) ,OngController.index);

//Criação de ONGs
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2)
    })
}), OngController.create);

//Listagem de casos de uma ONG específica
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown() 
}),  ProfileController.index)

//Listagem de TODOS os Casos
routes.get('/incidents',celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}) ,IncidentController.index);

//Criação de Casos
routes.post('/incidents',celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown(),
   
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  })
  
}) ,  IncidentController.create);

//Remoção de Casos
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}) ,IncidentController.delete);
  
module.exports = routes