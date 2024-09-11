import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import PersonService from '../../services/personService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.personEdit,
    );

    const payload = await new PersonService(req).update(
      req.params.id,
      req.body.data,
    );
    
    await res.status(206).send(payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
