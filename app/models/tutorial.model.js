module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      }
    });
  
    return Tutorial;
  };