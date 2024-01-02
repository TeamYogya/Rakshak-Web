import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storyInputApi = createApi({
  reducerPath: 'storyInputApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/stories/' }),
  endpoints: (builder) => ({
    addStory: builder.mutation({
      query: (story) => {
        return {
            url: 'stories/',
          method: 'POST',
          body: story,
          headers: {
            'Content-type': 'application/json',
          },
        };
      },
    }),
  }),
});

export const {useAddStoryMutation} = storyInputApi