//CREAMOS UNA TABLA DE NOMBRE QUIZ, formado por dos columnas: pregunta y respuesta

// Definicion del modelo Quiz:

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Quiz',
                          { question: { type: DataTypes.STRING,
                          	        validate: { notEmpty: {msg: "Falta Pregunta"}}
                          	          },
                            answer:   { type: DataTypes.STRING,
                                        validate: { notEmpty: {msg: "Falta Respuesta"}}
                                      }
                          });
};


