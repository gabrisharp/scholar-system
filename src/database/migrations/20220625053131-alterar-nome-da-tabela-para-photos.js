module.exports = {
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
      originalName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fileName: {
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
    await queryInterface.dropTable('fotos');
  },
};
/*
  CASCADE - Reflete quaisquer açoes do objeto pai no objeto filho (deletar ou atualizar)
  RESTRICT - Qualquer tentativa de modificar(onDelete ou onUpdate) o registro do objeto pai
    vai falhar e lançar um erro
  NO ACTION - Casos onde possa gerar um erro de continuidade o gerenciado de relacional utilizado
    deverá gerar um erro
  SET NULL - Em caso de alteração ou deleção da foreing key esse registro será configurado para NULL
*/
