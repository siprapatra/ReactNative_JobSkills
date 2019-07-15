import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import { getJobsSkillsAction } from "../../store/actions/JobSkillsAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { styles } from "./styles";

class JobDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            skills: '',
            jobName: '',
            isLoading: false
        }
    }

    componentDidMount() {
        this.props.getJobsSkillsAction(this.props.navigation.state.params.jobUUID);
    }

    render() {
        const { skills, jobName, isLoading } = this.state;
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.MainText}>Required Skills for {this.props.navigation.state.params.jobName + "\n"} </Text>
                {isLoading ?
                    <View style={{ flex: 1, paddingTop: 20 }}>
                        <ActivityIndicator />
                    </View> : <ScrollView>
                        <Text style={{ marginBottom: 10 }}>{skills}</Text>
                    </ScrollView>
                }
            </View>
        );
    }

    componentWillReceiveProps(nextProps) {
        this.state.isLoading = nextProps.jobSkills.isLoading;
        if (!nextProps.jobSkills.isLoading && nextProps.jobSkills.error == null && nextProps.jobSkills != null) {
            var skills = "";
            nextProps.jobSkills.jobSkills != undefined && nextProps.jobSkills.jobSkills.map((item, index) => {
                if (skills == "") { skills = item.skill_name; }
                else { skills += `, ${item.skill_name}` }
            })
            this.setState({
                skills: skills
            });
        }
        this.forceUpdate()
    }
}

function mapStateToProps(state) {
    return {
        jobSkills: state.jobSkills
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getJobsSkillsAction: getJobsSkillsAction
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobDetailsScreen);
