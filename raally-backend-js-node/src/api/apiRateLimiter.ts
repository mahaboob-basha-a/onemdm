import rateLimit from 'express-rate-limit';
import GlobalSettingsService from '../services/globalSettingsService';

/**
 * Convinience funciton to create request rate limitation.
 * It accepts maximum number of requests that API will accept in the given time window.
 * Under the hood it uses RateLimit library: https://www.npmjs.com/package/express-rate-limit.
 * 
 * @param max Maximum number of request to accept withing the given time window.
 * @param window Time window for rate limit in seconds. Default value is one second.
 * @returns RateLimit midleware object that can be attached to router.
 */
export function createRateLimiter(max: number, window: number = 1) {
  return rateLimit({
    max,
    windowMs: (window * 10000),
    message: 'errors.429',
    skip: async function (req) {

      const useRateLimit = await GlobalSettingsService.getUseRateLimit(req);
      if (req.method === 'OPTIONS' || !useRateLimit) {
        return true;
      }

      if (req.originalUrl.endsWith('/import')) {
        return true;
      }

      return false;
    }
  });
}
