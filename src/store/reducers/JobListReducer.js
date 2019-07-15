import { SHOW_LOADER, JOB_LIST_SUCCESS, JOB_LIST_FAIL } from "../../common/ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  jobsData: null,
  error: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true, error: null };
    case JOB_LIST_SUCCESS:
      return { ...state, isLoading: false, jobsData: JSON.parse(action.data), error: null };
    case JOB_LIST_FAIL:
      return { ...state, isLoading: false, error: "There are some issues occured while fetching repositories." };
    default:
      return state;
  }
}
