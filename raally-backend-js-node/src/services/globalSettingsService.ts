import SequelizeRepository from '../database/repositories/sequelizeRepository';
import GlobalSettingsRepository from '../database/repositories/globalSettingsRepository';

class GlobalSettingsService {

  static async save(useRateLimit, options) {
    const transaction = await SequelizeRepository.createTransaction(
      options.database,
    );

    const globalSettings = await GlobalSettingsRepository.save(
      useRateLimit,
      options,
    );

    await SequelizeRepository.commitTransaction(
      transaction,
    );

    return globalSettings;
  }

  static async getUseRateLimit(options) {
    const transaction = await SequelizeRepository.createTransaction(
      options.database,
    );

    const globalSettings = await GlobalSettingsRepository.getUseRateLimit(
      options,
    );

    await SequelizeRepository.commitTransaction(
      transaction,
    );

    return globalSettings;
  }
}

export default GlobalSettingsService;
