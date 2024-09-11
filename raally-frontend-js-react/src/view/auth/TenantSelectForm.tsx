import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import authSelectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import actions from 'src/modules/tenant/invitation/tenantInvitationActions';
import selectors from 'src/modules/tenant/invitation/tenantInvitationSelectors';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  id: yupFormSchemas.string(i18n('tenant.fields.tenantId')),
});

function TenantSelectForm(props) {
  const dispatch = useDispatch();

  const loading = useSelector(selectors.selectLoading);

  const invitedTenants = useSelector(
    authSelectors.selectInvitedTenants,
  );

  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
  );

  const [initialValues] = useState({
    id: invitedTenants[0].id,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ id }) => {
    const tenantUserInvitation = currentUser.tenants.find(
      (tenantUser) => tenantUser.tenant.id === id,
    );

    dispatch(
      actions.doAccept(
        tenantUserInvitation.invitationToken,
      ),
    );
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <SelectFormItem
          name="id"
          label={i18n('tenant.fields.tenantId')}
          options={invitedTenants.map((item) => ({
            value: item.id,
            label: item.name,
          }))}
        />

        <button
          style={{ marginTop: '16px' }}
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {i18n('tenant.invitation.accept')}
        </button>

        <button
          style={{ marginTop: '16px' }}
          type="button"
          className="btn btn-light btn-block"
          onClick={props.onViewToggle}
        >
          {i18n('tenant.new.title')}
        </button>
      </form>
    </FormProvider>
  );
}

export default TenantSelectForm;
