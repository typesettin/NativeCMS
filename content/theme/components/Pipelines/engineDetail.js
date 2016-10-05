import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Platform, ListView, Image, Dimensions, } from 'react-native';
import styles from '../../../../app/components/Styles/shared';
import layoutStyles from '../../../../app/components/Styles/layout';
import Icons from '../../../../app/components/Icons';
import HTMLText from '../../../../app/components/HTMLText';
import ActionBar from '../../../../app/components/MenuBar/ActionBar';
import Form from '../../../../app/components/Form';
import { checkStatus, request, } from '../../../../app/util/request';
import LoadingView from '../../../../app/components/LoadingIndicator/LoadingView';
import { Button, FormLabel, FormInput, } from 'react-native-elements';
import constants from '../../constants';
import moment from 'moment';

class EngineDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
    console.log('EngineDetail',{props,})
  }
  componentDidMount() { 
  }
  componentWillReceiveProps(nextProps) {
    // console.log({ nextProps, });
    // if (nextProps.fetchData.json) {
    //   this.setState({
    //   });
    // }
  }

  render() {

    let menuBarContentWrapperStyle = (this.props.getGroupListDetailFunctions.useSingleViewHelpers()) ? layoutStyles.menuBarContentBottomtWrapperOverrride : {};
    let menuBarContentItemStyle = (this.props.getGroupListDetailFunctions.useSingleViewHelpers()) ? {} : { paddingLeft: 20, };
    let menuBarItemWrapperStyle = (this.props.getGroupListDetailFunctions.useSingleViewHelpers()) ? {
      justifyContent: 'space-around',
    } :
    {
      justifyContent: 'flex-end',
    };

    let ActionBarComponent = (<ActionBar
      {...this.props.GroupListDetail.detail}
      menuBarContentWrapperStyle={menuBarContentWrapperStyle}
      menuBarItemWrapperStyle={menuBarItemWrapperStyle}
      menuBarContentItemStyle={menuBarContentItemStyle}
      />);
    let topActionBar = (this.props.getGroupListDetailFunctions.useSingleViewHelpers()) ? null : ActionBarComponent;
    let bottomActionBar = (this.props.getGroupListDetailFunctions.useSingleViewHelpers()) ? ActionBarComponent : null;
    return (
      <View style={[ styles.scrollViewStandardContainer, layoutStyles.menuBarSpaceAndBorder, ]}  >
        {topActionBar}
        <ScrollView style={styles.scrollViewStandardContainer} contentContainerStyle={styles.scrollViewStandardContentContainer}>
          <Button  title="GO BACK!!!" onPress={
            ()=>{
              this.props.goBackToExtension();
            }}/> 
          
          <Text>{JSON.stringify(this.props.detailData,'',2)}</Text>
          <Text>{JSON.stringify(this.props.detailData,'',2)}</Text>
          <Text>height ReactPropTypes.number height sets the height of this component.</Text>
        </ScrollView>
        {bottomActionBar}
      </View>
    );
  }
}

export default EngineDetail;