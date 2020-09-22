import api from '../../services/api';

export const getAllMarvelData = async () => {
  const response = await api.get('all');

  return response;
};
