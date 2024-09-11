import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import CompensationService from '../../services/compensationService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateDoesNotHave(
      Permissions.values.compensationCreate,
    );

    const payload = await new CompensationService(req).create(
      req.body.data,
    );

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
