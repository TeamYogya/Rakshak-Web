import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const donateAuthApi = createApi({
  reducerPath: 'donateAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/donate/' }),
  endpoints: (builder) => ({
    DonateUser: builder.mutation({
      query: (user) => {
        return {
          url: 'donate/',
          method: 'POST',
          body: user,
          headers: {
            'Content-type': 'application/json',
          }
        }
      }
    }),
  }),
})

export const { useCreateDonateCardMutation } = donateAuthApi