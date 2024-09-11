import GlobalSettingsService from '../../services/globalSettingsService';
import ApiResponseHandler from '../apiResponseHandler';

export default async (req, res, next) => {
  try {
    
    await GlobalSettingsService.save(
      req.body.data.useRateLimit,
      req,
    );

    await ApiResponseHandler.success(req, res, null);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
