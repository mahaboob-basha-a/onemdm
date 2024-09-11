import SequelizeRepository from './sequelizeRepository';
import { IRepositoryOptions } from './IRepositoryOptions';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

export default class GlobalSettingsRepository {

  static async save(useRateLimit, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    await options.database.globalSettings.update({
      useRateLimit
    }, {
      where: {
        [Op.or]: [
          { 'useRateLimit': true },
          { 'useRateLimit': false }
        ],
      },
      transaction,
    });
  }

  static async getUseRateLimit(options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.globalSettings.findOne(
      {
        transaction,
      },
    );

    return record.useRateLimit;
  }
}
