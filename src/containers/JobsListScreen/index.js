import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getJobsListAction } from "../../store/actions/JobListAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { styles } from "./styles";

class JobsListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            text: '',
            dataSource: []
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        this.props.getJobsListAction(this.state.text);
    }

    SearchFilterFunction(text) {
        this.props.getJobsListAction(text);
        this.setState({
            text: text,
            isLoading: true
        })
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={{ flex: 1 }}>
                    <TextInput
                        style={styles.TextInputStyleClass}
                        onChangeText={(text) => this.SearchFilterFunction(text)}
                        value={this.state.text}
                        underlineColorAndroid='transparent'
                        placeholder="Search for Repository"
                    />{this.state.isLoading ?

                        <View style={{ flex: 1, paddingTop: 20 }}>
                            <ActivityIndicator />
                        </View>

                        :
                        <FlatList
                            data={this.state.dataSource}
                            ItemSeparatorComponent={this.ListViewItemSeparator}
                            extraData={this.state.isLoading}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity key={item.uuid}
                                    onPress={() => this.props.navigation.navigate("JobDetailsScreen", {
                                        jobUUID: item.uuid,
                                        jobName: item.normalized_job_title
                                    })}>
                                    <Text
                                        style={styles.rowViewContainer}
                                    >
                                        {item.normalized_job_title}</Text>
                                </TouchableOpacity>}
                            enableEmptySections={true}
                            style={{ marginTop: 10 }}
                        />}
                </View>
                {/* <TouchableOpacity onPress={()=> this.props.navigation.navigate("BLEDevicesScreen")}>
                        <Text>BLE Devices</Text>
                    </TouchableOpacity> */}
            </View>
        );

    }

    componentWillReceiveProps(nextProps) {

        if (!nextProps.jobList.isLoading && nextProps.jobList.error == null) {
            this.setState({
                dataSource: nextProps.jobList.jobsData,
                isLoading: nextProps.jobList.isLoading
            });
        } else if (nextProps.jobList.error != null) {
            this.state.isLoading = nextProps.jobList.isLoading;
        }
        this.forceUpdate();
    }
}

function mapStateToProps(state) {
    return {
        jobList: state.jobList
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getJobsListAction: getJobsListAction
        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobsListScreen);
