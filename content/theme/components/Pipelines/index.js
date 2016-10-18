import React, { Component } from 'react';
import { StyleSheet, View, Platform, Dimensions, ListView, ScrollView, RefreshControl, } from 'react-native';
import styles from '../../../../app/components/Styles/shared';
import layoutStyles from '../../../../app/components/Styles/layout';
import LoadingView from '../../../../app/components/LoadingIndicator/LoadingView';
import GroupListDetail, { getGroupFromEntityName, getListFromEntityName, getDetailFromEntityName, } from '../../../../app/components/GroupListDetail';
import { Button, Text, SearchBar } from 'react-native-elements';
import constants from '../../constants';
import EngineDetail from './engineDetail';
import EngineDetailCompose from './engineDetailCompose';
import EngineDetailEdit from './engineDetailEdit';
import moment from 'moment';
import numeral from 'numeral';
import capitalize from 'capitalize';
import pluralize from 'pluralize';

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
          useGroups: true,
        },
        groupTitle: 'Pipeline',
        baseURL:'/pipelines',
        entities: {
          Engines: {
            group: getGroupFromEntityName('engine', 'pipeline', { constants, }),
            list: getListFromEntityName('engine', 'pipeline', { constants, }),
            detail: getDetailFromEntityName('engine', 'pipeline', {
              detailComponent: EngineDetail,
              createModalComponent: EngineDetailCompose,
              editModalComponent: EngineDetailEdit,
              constants,
            }),
          },
          Resources: {
            group: getGroupFromEntityName('resource', 'pipeline', { constants, }),
            list: getListFromEntityName('resource', 'pipeline', { constants, }),
            detail: getDetailFromEntityName('resource', 'pipeline', {
              detailComponent: EngineDetail,
              createModalComponent: LoadingView,
              editModalComponent:LoadingView,
              constants,
            }),
          },
          Parsers: {
            group: getGroupFromEntityName('parser', 'pipeline', { constants, }),
            list: getListFromEntityName('parser', 'pipeline', { constants, }),
            detail: getDetailFromEntityName('parser', 'pipeline', {
              detailComponent: EngineDetail,
              createModalComponent: LoadingView,
              editModalComponent:LoadingView,
              constants,
            }),
          },
          Segments: {
            group: getGroupFromEntityName('segment', 'pipeline', { constants, }),
            list: getListFromEntityName('segment', 'pipeline', { constants, }),
            detail: getDetailFromEntityName('segment', 'pipeline', {
              detailComponent: EngineDetail,
              createModalComponent: LoadingView,
              editModalComponent: LoadingView,
              constants,
            }),
          },
        },
      },
    };
    return (<GroupListDetail {...this.props} {...groupListOptions}/>);     
  }
}

export default Pipelines;