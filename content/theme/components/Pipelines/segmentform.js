import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Platform, Text, Image, Dimensions, TextInput, } from 'react-native';
import layoutStyles from '../../../../app/components/Styles/layout';
import constants from '../../constants';
import { getSegmentConditionsHeader, getSegmentConditionsRenderRowData, getSegmentRulesetRulesHeader, getSegmentRulesetRulesRenderRowData, newSegmentConditionItems, } from './pipelineTableLayout';

export default function (formProps) {
  return [ {
    layoutColumns: 2,
    formElements: [{
      type:'text',
      label:'Title',
      name:'title',
      // value:'text',
    }, {
      type:'text',
      label:'Name',
      name:'name',
      // value:'text',
    }, ],
  }, {
    layoutColumns: 1,
    formElements: [{
      type:'textarea',
      label:'Description',
      name:'description',
      // value:'text',
    }, {
      type:'text',
      label:'Category',
      name:'category',
      // value:'text',
    }, {
      type: 'datatable',
      label: 'Conditions',
      name: 'conditions',
      dataTableHeader: getSegmentConditionsHeader,
      dataTableRow: getSegmentConditionsRenderRowData,
      newItems: newSegmentConditionItems,
    }, {
      type:'text',
      label:'Ruleset Title',
      name:'ruleset.title',
      // value:'text',
    }, {
      type:'text',
      label:'Ruleset Name',
      name:'ruleset.name',
      // value:'text',
    }, {
      type: 'datatable',
      label: 'Ruleset Rules',
      name: 'ruleset.rules',
      dataTableHeader: getSegmentRulesetRulesHeader,
      dataTableRow: getSegmentRulesetRulesRenderRowData,
      newItems: [ {
        type: 'text',
        label: 'Function',
        name:'function_name',
      }, {
        type: 'text',
        label: 'Default State',
        name:'default_state',
      }, ],
    }, {
      type: 'divider',    
    }, ],
  }, {
    layoutColumns: 2,
    formElements: [{
      type:'submit',
      label:'Save',
      name:'submit_button',
      value: 'Save',
      passProps: {
        backgroundColor: 'mediumaquamarine',
        style: {
          color: 'white',
        },
      }
    }, {
      type:'button',
      label:'Cancel',
      name: 'cancel_button',
      onPress: formProps.closeExtensionModal,
      value: 'Cancel',
      // passProps: {
      //   raised:true,
      // }
    }, ],  
  }, ];
}
