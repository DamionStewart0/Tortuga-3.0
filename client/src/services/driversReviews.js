import api from './api-config';

export const addReviewsToDrivers = async (review_id, driver_id) => {
    const resp = await api.put(`/reviews/${review_id}/drivers/${driver_id}`)
    return resp.data
}