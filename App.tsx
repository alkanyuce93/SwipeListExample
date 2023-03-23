import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

const data = [
  {key: '1', text: 'item 1'},
  {key: '2', text: 'item 2'},
  {key: '3', text: 'item 3'},
  {key: '4', text: 'item 4'},
  {key: '5', text: 'item 5'},
];

const renderItem = ({item}) => (
  <View style={styles.row}>
    <Text style={styles.text}>{item.text}</Text>
  </View>
);

const renderHiddenItem = () => (
  <View style={styles.rowBack}>
    <Text style={styles.text}>Delete</Text>
  </View>
);

function App(): JSX.Element {
  return (
    <View style={{marginTop: 50}}>
      <Text style={{alignSelf: 'center', fontSize: 20}}>
        Swipe List Example
      </Text>
      <SwipeListView
        data={data}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-75}
        onRowOpen={() => console.log('Row opened')}
        onRowClose={() => console.log('Row closed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#FF0000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
  },
  text: {
    color: '#000',
  },
});

export default App;
