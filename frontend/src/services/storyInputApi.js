import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const storyInputApi = createApi({
  reducerPath: 'storyInputApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/stories/' }),
  endpoints: (builder) => ({
    addStory: builder.mutation({
      query: (story) => {
        return {
          url: 'create/',
          method: 'POST',
          body: story,
          headers: {
            'Content-type': 'application/json',
          },
        };
      },
    }),
    getStories: builder.query({
      query: () => 'get/',
    }),
  }),
});

export const { useAddStoryMutation, useGetStoriesQuery } = storyInputApi;
