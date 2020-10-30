export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   'BQDug_3PX4aWz1F544NvbO1Q5EZ8r3VREFkBMs_ZvfU3TJhSmS1dxcxWGQhw8UrxhLuagTa6fOQGtpZnaVTSh2OK_jCJbf92XnDGZMRQnJa-MxbcH2iIUM_ClNFJJahQI6vs-FBLPhnMOrTfFDB3rjhFxt0IxxRKuAArrTWhhF2QGBnnQUd_',
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
