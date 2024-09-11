import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'src/modules/dashboard/dashboardActions';
import selectors from 'src/modules/dashboard/dashboardSelectors';
import Spinner from 'src/view/shared/Spinner';
import DashboardDoughnutChart from 'src/view/dashboard/DashboardDoughnutChart';
import DashboardMixChartOne from 'src/view/dashboard/DashboardMixChartOne';
import DashboardRadarChart from 'src/view/dashboard/DashboardRadarChart';
import { i18n } from 'src/i18n';

const DashboardPage = (props) => {
  const dispatch = useDispatch();

  const loading = useSelector(selectors.selectLoading);

  const currentIdlenessHoursData = useSelector(selectors.selectCurrentUsageDataByHours);
  const currentIdlenessPeopleData = useSelector(selectors.selectCurrentUsageDataByPeople);
  const currentIdlePeopleByRole = useSelector(selectors.selectCurrentIdlePeopleByRole);
  const numberOfPeople = useSelector(selectors.selectNumberOfPeople);
  const totalElapsedTime = useSelector(selectors.selectElapsedTime);

  useEffect(() => {
    dispatch(actions.loadDashboardData());
  }, [dispatch]);

  return (
    <>
      {loading && (      
      <Spinner />          
      )}
      {!loading && (
      <div
        style={{
          padding: 0,
          marginLeft: '-12px',
          marginRight: '-12px',
        }}
      >
        <div className="row no-gutters">
          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardMixChartOne data={numberOfPeople}/>
            </div>
          </div>

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardDoughnutChart data={currentIdlenessHoursData}/>
            </div>
          </div>

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border rounded">
            <DashboardDoughnutChart data={currentIdlenessPeopleData}/>
            </div>
          </div>

          <div
            style={{
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingBottom: '24px',
            }}
            className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
          >
            <div className="bg-white p-2 border rounded">
              <DashboardRadarChart data={currentIdlePeopleByRole}/>
            </div>
          </div>
        </div>
        <p
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'grey',
          }}
        >
          {i18n('dashboard.message', totalElapsedTime)}
        </p>
      </div>
      )}
    </>
  );
};

export default DashboardPage;
