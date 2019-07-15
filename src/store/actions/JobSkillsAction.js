import { SHOW_LOADER, JOB_SKILLS_SUCCESS, JOB_SKILLS_FAIL } from "../../common/ActionTypes";

export const getJobsSkillsAction = (uuid) => {
  return dispatch => {
    dispatch({
      type: SHOW_LOADER,
    });

    fetch(`http://api.dataatwork.org/v1/jobs/${uuid}/related_skills`).then(res => res.json()).
      then((resData) => {

        dispatch({
          type: JOB_SKILLS_SUCCESS,
          data: JSON.stringify(resData)
        });
      }).catch(err => {
        dispatch({
          type: JOB_SKILLS_FAIL,
          data: "error"
        })
      });
  }
};
