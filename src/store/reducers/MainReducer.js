import { combineReducers } from 'redux';

import JobListReducer from './JobListReducer';
import JobSkillsReducer from './JobSkillsReducer';


export default combineReducers({
    jobList: JobListReducer,
    jobSkills: JobSkillsReducer
});     