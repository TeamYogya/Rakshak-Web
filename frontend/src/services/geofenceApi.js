import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const geofenceApi = createApi({
  reducerPath: 'geofenceApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/geodjango/' }),
  endpoints: (builder) => ({
    getMap: builder.query({
      query: (access_token) => {
        return {
          url: 'geofence/',
          method: 'GET',
          headers: {
            'authorization': `Bearer ${access_token}`,
          }
        }
      }
    }),
  }),
});

export const {
  useGetMap,
} = geofenceApi;