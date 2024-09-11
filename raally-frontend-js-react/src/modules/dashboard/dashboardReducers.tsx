import actions from 'src/modules/dashboard/dashboardActions';
import { i18n } from 'src/i18n';

const initialData = {
  loading: false,
  data: {
    currentUsageDataByHours: {},
    currentUsageDataByPeople: {},
    currentIdlePeopleByRole: {},
    numberOfPeople: {}
  }
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.FIND_STARTED) {
    return {
      ...state,
      data: initialData.data,
      loading: true,
    };
  }

  if (type === actions.FIND_SUCCESS) {

    const fetchedData = {
      totalElapsedTime: payload.totalElapsedTime,
      currentUsageDataByHours: {
      labels: [
        i18n('dashboard.charts.busy'),
        i18n('dashboard.charts.idle')
      ],
      datasets: [
        {
          data: [ payload.currentUsageDataByHours.busy, payload.currentUsageDataByHours.idle ],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
          ],
        },
      ],
    },
    currentUsageDataByPeople: {
      labels: [
        i18n('dashboard.charts.fullyBusy'),
        i18n('dashboard.charts.partlyIdle'),
        i18n('dashboard.charts.fullyIdle')
      ],
      datasets: [
        {
          data: [
            payload.currentUsageDataByPeople.fullyBusy, 
            payload.currentUsageDataByPeople.partlyIdle, 
            payload.currentUsageDataByPeople.fullyIdle
          ],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        },
      ],
    },
    currentIdlePeopleByRole: {
      labels: [
        i18n('dashboard.charts.projectManager'),
        i18n('dashboard.charts.technicalLead'),
        i18n('dashboard.charts.seniorDeveloper'),
        i18n('dashboard.charts.intermediateDeveloper'),
        i18n('dashboard.charts.juniorDeveloper')
      ],
      datasets: [
        {
          label: 'Usage By Role',
          data: [
            payload.currentIdlePeopleByRole.projectManager, 
            payload.currentIdlePeopleByRole.technicalLead,
            payload.currentIdlePeopleByRole.seniorDeveloper,
            payload.currentIdlePeopleByRole.intermediateDeveloper,
            payload.currentIdlePeopleByRole.juniorDeveloper
          ],
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
        },
      ],
    },
    numberOfPeople: {
      labels: [
        i18n('dashboard.charts.projectManager'),
        i18n('dashboard.charts.technicalLead'),
        i18n('dashboard.charts.seniorDeveloper'),
        i18n('dashboard.charts.intermediateDeveloper'),
        i18n('dashboard.charts.juniorDeveloper')
      ],
      datasets: [
        {
          label: 'People',
          data: [
            payload.numberOfPeople.projectManager, 
            payload.numberOfPeople.technicalLead,
            payload.numberOfPeople.seniorDeveloper,
            payload.numberOfPeople.intermediateDeveloper,
            payload.numberOfPeople.juniorDeveloper
          ],
          backgroundColor: '#36A2EB',
          borderColor: '#36A2EB',
          hoverBackgroundColor: '#36A2EB',
          hoverBorderColor: '#36A2EB',
        },
      ],
    }};

    return {
      ...state,
      data: fetchedData,
      loading: false,
    };
  }

  if (type === actions.FIND_ERROR) {
    return {
      ...state,
      loading: false,
      data: initialData.data,
    };
  }

  return state;
};
