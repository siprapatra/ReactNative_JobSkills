import { SHOW_LOADER, JOB_SKILLS_SUCCESS, JOB_SKILLS_FAIL } from "../../common/ActionTypes";

const INITIAL_STATE = {
  isLoading: false,
  jobSkills: null,
  error: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true, error: null, jobSkills: null };
    case JOB_SKILLS_SUCCESS:
      return { ...state, isLoading: false, jobSkills: JSON.parse(action.data).skills, error: null };
    case JOB_SKILLS_FAIL:
      return { ...state, isLoading: false, error: "There are some issues occured while fetching repositories." };
    default:
      return state;
  }
}
