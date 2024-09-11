export default class FormErrors {
  static errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage = null,
  ) {
    if (externalErrorMessage) {
      return externalErrorMessage;
    }

    if (!isSubmitted && !touched[name]) {
      return null;
    }

    const fieldErrors = errors[name];

    return (
      fieldErrors?(fieldErrors[0]?fieldErrors[0].message:undefined ):undefined||
      fieldErrors?fieldErrors.message:undefined ||
      fieldErrors ||
      null
    );
  }
}
