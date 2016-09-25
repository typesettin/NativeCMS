/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes, } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import styles from '../../../../app/components/Styles/shared';
import gridStyles from '../../../../app/components/Styles/gridView';
import 'whatwg-fetch';
import 'babel-polyfill';
import {
  Button,
  List,
  ListItem,
  // Card, SocialIcon, List, ListItem, ListView, PricingCard
} from 'react-native-elements';
import GridView from 'react-native-grid-view';

class RepoItem extends Component {
  render() {
    console.log('rendering RepoItem props', this.props);
     /*this.props.owner.avatar_url*/
    return (
      <View
        key={this.props.id}
        >
      <Text>item</Text>  
      </View>
    );
    // return (
    //   <View style={gridStyles.gridItem} key={this.props.id}>
    //     <Image
    //       source={{ uri: 'http://lorempixel.com/400/400', }}
    //       style={[gridStyles.thumbnail,{resizeMode:'cover'}]}
    //     />
    //     <View >
    //       <Text 
    //       style={gridStyles.title}
    //       numberOfLines={3}>{this.props.clone_url}</Text>
    //       <Text style={gridStyles.year}>year: {this.props.description}</Text>
    //     </View>
    //   </View>
    // );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: props.fetchData,
    };
    console.log('CUSTOM HOME this.props', this.props);
  }
  componentDidMount() {
    this.props.requestData('https://pas-development.promisefinancial.net/pas/data/v2');
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      fetchData: nextProps.fetchData,
    });
  }
  render() {
    let repoGrid = (this.state.fetchData.json && this.state.fetchData.json.length > 0) ?
      <List containerStyle={{ marginBottom: 20,padding:0 }}>{this.state.fetchData.json.map((l, i) => (
      <RepoItem {...l} key={l.id}
      />
      )) }</List> : <Text>No repos</Text>;
    
    // let repoGrid = (this.state.fetchData.json && this.state.fetchData.json.length>0)?<GridView items={this.state.fetchData.json} itemsPerRow={3} renderItem={this.renderItem}  style={gridStyles.listView}/>:<Text>No repos</Text>;
    return (
      <View style={[styles.scrollViewWrapperContainer,styles.statusBarPadding]}>
        {/* */}      
        <ScrollView style={{flex:1}} contentContainerStyle={ { paddingVertical: 20,position:'relative' }}>
          {/**/}
          <Text style={styles.welcome}>
            Custom Home Page
          </Text>
          <Text style={styles.instructions}>
            URL: {this.state.fetchData.url}
          </Text>
          <Text style={styles.instructions}>
            Data length: {(this.state.fetchData.json) ? this.state.fetchData.json.length : 0}
          </Text>

          
          <Button
            onPress={() => {
              this.props.requestData('https://api.github.com/users/yawetse/repos');
            } }
            small
            iconRight
            icon={{ name: 'code', }}
            backgroundColor="green"
            title="Refresh Data YE" />

          <View style={styles.container}>
            {repoGrid}
          </View>
          {/* */}
        </ScrollView>
        {/* */}
      </View>
    );
  }
  renderItem(item) {
    return <RepoItem {...item} key={item.id} />;
  }
}

export default Home;