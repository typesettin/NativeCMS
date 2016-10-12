import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, } from 'react-native';
import styles from '../Styles/shared';
import layoutStyles from '../Styles/layout';
import Icons from '../Icons';
import HTMLText from '../HTMLText';
import { Grid, Col } from '../Grid';
// import ActionBar from '../MenuBar/ActionBar';

// import { checkStatus, request, } from '../../util/request';
// import LoadingView from '../LoadingIndicator/LoadingView';
// import constants from '../../constants';
// import moment from 'moment';
// import capitalize from 'capitalize';
// import pluralize from 'pluralize';

exports.HR = class HR extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View {...this.props} style={[ layoutStyles.hr, this.props.style, ]}>{this.props.children}</View>;
  }
};

exports.H1 = class H1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={{flex:0, 
}}><Text {...this.props} style={[ layoutStyles.detail_h1, this.props.style, ]}>{this.props.children}</Text></View>;
  }
};

exports.H2 = class H2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View style={{flex:0,  
}}><Text {...this.props} style={[ layoutStyles.detail_h2, this.props.style, ]}>{this.props.children}</Text></View>;
  }
};

exports.RESPONSIVE_TWO_COLUMN = class TWO_COLUMN extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { width, } = Dimensions.get('window');
    if (width > 600) {
      return this.getTwoColumns();
    } else {
      return this.getOneColumn();
    }
  }
  getOneColumn() {
    return (<View style={[this.props.style, ]}>
      {this.props.children[0]}
      {this.props.children[1]}
    </View>);
  }
  getTwoColumns() {
    return (<View style={[{ flex:1, flexDirection:'row', }, this.props.style, ]}>
      <View style={{ flex:2, }}>
        {this.props.children[0]}
      </View>
      <View style={{ flex:2, }}>
        {this.props.children[1]}
      </View>
    </View>);
  }
};

exports.GRID_ITEM = class GRID_ITEM extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let reverseItems = (this.props.useLabel) ? { flexDirection:'column-reverse', } : {} ;
    return (<View style={layoutStyles.gridItemContainer}>  
      {(this.props.icon) ? (
        <View style={layoutStyles.gridItemIconWrapper}><Icons {...this.props.icon} size={24}/></View>)
        : null}  
        {(this.props.children) ? 
          <View style={[layoutStyles.gridItemContent,this.props.gridItemContentStyle]}>
            {this.props.children}
          </View>  : (
          <View style={[layoutStyles.gridItemContent,reverseItems]}>
            <Text numberOfLines={1} style={layoutStyles.gridItemTitle}>{this.props.title}</Text>
            <Text numberOfLines={1} style={layoutStyles.gridItemDescription}>{this.props.description}</Text>
          </View>  
        )}
      
    </View>);  
  }
};

exports.RESPONSIVE_GRID = class RESPONSIVE_GRID extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    let { width, } = Dimensions.get('window');
    let gridColumns = 1;
    if (width < 600 && this.props.narrowColumns) {
      gridColumns = this.props.narrowColumns;
    } else if (width >= 600 && this.props.columns) {
      gridColumns = this.props.columns;
    }
    let colSpan = (24 / gridColumns);
    let gridItems = (Array.isArray(this.props.children) && this.props.children.length > 1 ) ?
      this.props.children.map((child, i) => {
        return (
          <Col key={i} span={colSpan}>
            {child}
          </Col>);
      }) :
      ([(<Col key={0} span={colSpan}>{this.props.children}</Col>)]);
    
    // console.log('this.props.children',this.props.children)
    // console.log({gridItems})
    return (
      <Grid style={{alignSelf:'stretch',alignItems:'stretch'}}>
        {gridItems}
      </Grid>);
  }
};