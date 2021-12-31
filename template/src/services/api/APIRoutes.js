import api from './API';

const apiRoutes = {
  login: payload => api.get('/todos', payload),
};

export default apiRoutes;
