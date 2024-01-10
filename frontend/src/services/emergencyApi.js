import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emergencyApi = createApi({
  reducerPath: 'emergencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/emergency/' }),
  endpoints: (builder) => ({
    createEmergencyCard: builder.mutation({
      query: (emergencyData) => {
        return {
          url: 'help/',
          method: 'POST',
          body: emergencyData,
          headers: {
            'Content-type': 'application/json',
          },
        };
      },
    }),
    listEmergencyCards: builder.query({
      query: () => {
        return {
          url: 'help/list/',
          method: 'GET',
        };
      },
    }),
    deleteEmergencyCard: builder.mutation({
      query: (id) => {
        return {
          url: `help/${id}/`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useCreateEmergencyCardMutation,
  useListEmergencyCardsQuery,
  useDeleteEmergencyCardMutation,
} = emergencyApi;
