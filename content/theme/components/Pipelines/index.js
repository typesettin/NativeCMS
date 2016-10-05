import React, { Component } from 'react';
import { StyleSheet, View, Platform, Dimensions, ListView, ScrollView, RefreshControl, } from 'react-native';
import styles from '../../../../app/components/Styles/shared';
import layoutStyles from '../../../../app/components/Styles/layout';
import LoadingView from '../../../../app/components/LoadingIndicator/LoadingView';
import GroupListDetail from '../../../../app/components/GroupListDetail';
import { Button, Text, SearchBar } from 'react-native-elements';
import constants from '../../constants';
import EngineDetail from './engineDetail';
import moment from 'moment';
import numeral from 'numeral';

class Pipelines extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let groupListOptions = {
      GroupListDetail: {
        options: {
          useGroups: false,
        },
        group: {
          fetchUrl:constants.pipelines.all.BASE_URL+constants.pipelines.engines.GET_INDEX,
          listProps: {
            pagesProp:'enginepages',
            dataProp:'engines',
            countProp:'enginescount',
          },
        },
        list: {
          fetchUrl: constants.pipelines.all.BASE_URL + constants.pipelines.engines.GET_INDEX,
          listProps: {
            pagesProp:'enginepages',
            dataProp:'engines',
            countProp:'enginescount',
          },
          componentProps: {
            title:'Engine',
          },
          detailLoad: {
            method:'passProps',
          },
          menuBar: {
            rightItem: {
              icon: {
                icontype: 'Ionicons',
                name: 'ios-create-outline',
              },
            },
          },
        },
        detail: {
          fetchUrl: constants.pipelines.all.BASE_URL + constants.pipelines.engines.GET_INDEX,
          detailComponent: EngineDetail,
          detailExtensionRoute:'/pipelines/engines/:id',
        },
      },
    };
    return (<GroupListDetail {...this.props} {...groupListOptions}/>);     
  }
}

export default Pipelines;