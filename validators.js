// controllers/validators.js
const { body, validationResult } = require('express-validator');

const createValidator = [
  body('title').isString().trim().notEmpty().withMessage('title é obrigatório e deve ser string'),
  body('status').optional().isIn(['pendente','em andamento','concluida']).withMessage('status inválido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error('Validação falhou: ' + errors.array().map(e => e.msg).join(', '));
      err.status = 400;
      return next(err);
    }
    next();
  }
];

const updateValidator = [
  body('title').optional().isString().trim().notEmpty().withMessage('title deve ser string'),
  body('status').optional().isIn(['pendente','em andamento','concluida']).withMessage('status inválido'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const err = new Error('Validação falhou: ' + errors.array().map(e => e.msg).join(', '));
      err.status = 400;
      return next(err);
    }
    next();
  }
];

module.exports = { createValidator, updateValidator };
