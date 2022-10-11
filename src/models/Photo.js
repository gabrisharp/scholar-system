import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo precisa estar preenchido',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo precisa estar preenchido',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          const { url } = appConfig;
          return `${url}/images/${this.getDataValue('filename')}`;
        },
      },
    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }
  // Comentado porque esta funcionalidade já foi aplicado no model Aluno para linkar com esse objeto
  /*
    static associate(models) {
      this.belongsTo(models.aluno, { foreignKey: 'aluno_id' });
    }
  */
}
