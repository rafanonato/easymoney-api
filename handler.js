const connectToDatabase = require('./db');
const user = require('./user.model');
const data = require('./data.model')
require('dotenv').config({ path: './variables.env' });

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      user.create(JSON.parse(event.body))
        .then(user => callback(null, {
          statusCode: 200,
          body: JSON.stringify(user)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
              statuscode: 500,
              message: 'Não foi possível criar seu usuário'
            })
        }));
    });
};

module.exports.createdata = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      data.create(JSON.parse(event.body))
        .then(data => callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            { 
              statuscode: 500,
              message: 'Não foi possível criar o serviço!'
            }
          )
        }));
    });
};

module.exports.getdata = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      data.findById(event.pathParameters.id)
        .then(data => callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            { 
              statuscode: 500,
              message: 'Não foi possível encontar o usuário!'
            }
          )
        }));
    });
};

module.exports.getAllData = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      data.find()
        .then(data => callback(null, {
          statusCode: 200,
          body: JSON.stringify(data)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            { 
              statuscode: 500,
              message: 'Não foi possivel listar os serviços!'
            }
          )
        }))
    });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      user.findById(event.pathParameters.id)
        .then(user => callback(null, {
          statusCode: 200,
          body: JSON.stringify(user)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            { 
              statuscode: 500,
              message: 'Não foi possível enconrar o usuário!'
            }
          )
        }));
    });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      user.find()
        .then(user => callback(null, {
          statusCode: 200,
          body: JSON.stringify(user)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            { 
              statuscode: 500,
              message: 'Não foi possivel listar os usuários!'
            }
          )
        }))
    });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      user.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(user => callback(null, {
          statusCode: 200,
          body: JSON.stringify(user)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            { 
              statuscode: 500,
              message: 'Não foi possivel Alterar o usuário!'
            }
          )
        }));
    });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      user.findByIdAndRemove(event.pathParameters.id)
        .then(user => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed note with id: ' + user._id, note: user })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            { 
              statuscode: 500,
              message: 'Não foi possivel Remover o usuário!'
            }
          )
        }));
    });
};