import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import PlanCardWrapper from 'src/view/plan/styles/PlanCardWrapper';
import authSelectors from 'src/modules/auth/authSelectors';
import Plans from 'src/security/plans';

export default function PlanCardFree(props) {
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );

  const isCurrentPlan =
    currentTenant.plan === Plans.values.free;

  const buttonState = isCurrentPlan ? 'current' : null;

  return (
    <PlanCardWrapper>
      <div>
        <div className="title">
          {i18n(`plan.${Plans.values.free}.label`)}
        </div>
        <div className="pricing">
          {i18n(`plan.free.price`)}
          <span className="pricingPeriod">
            {i18n('plan.pricingPeriod')}
          </span>
        </div>
      </div>

      <div>
        {buttonState === 'current' && (
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block w-100"
            disabled={true}
          >
            {i18n('plan.current')}
          </button>
        )}
      </div>
    </PlanCardWrapper>
  );
}
