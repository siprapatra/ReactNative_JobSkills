import { SHOW_LOADER, JOB_LIST_SUCCESS, JOB_LIST_FAIL } from "../../common/ActionTypes";

export const getJobsListAction = (searchText) => {
  return dispatch => {
    dispatch({
      type: SHOW_LOADER,
    });

    fetch(`http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${searchText}`).then(res => res.json()).
      then((resData) => {
        //console.log("data1", resData)
        dispatch({
          type: JOB_LIST_SUCCESS,
          data: JSON.stringify(resData)
        });
      }).catch(err => {
        //console.log("error", err)
        dispatch({
          type: JOB_LIST_FAIL,
          data: "error"
        });
      });
  }
};
