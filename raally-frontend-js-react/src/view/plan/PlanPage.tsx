import React from 'react';
import { i18n } from 'src/i18n';
import Plans from 'src/security/plans';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import PlanCardFree from 'src/view/plan/PlanCardFree';
import PlanCardPaid from 'src/view/plan/PlanCardPaid';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PlanPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('plan.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{i18n('plan.title')}</PageTitle>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <PlanCardFree />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <PlanCardPaid plan={Plans.values.growth} />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <PlanCardPaid plan={Plans.values.enterprise} />
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}

export default PlanPage;
