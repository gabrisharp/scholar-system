"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('photos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // Em caso de Null usar CASCADE para deletar foto
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'SET NULL', // CASCADE - caso quando aluno deletado apagar foto também
        onUpdate: 'CASCADE', // Caso id do aluno seja atualizado atualizar campo também
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('photos');
  },
};
