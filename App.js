/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Dimensions, SafeAreaView,
  StatusBar, StyleSheet,
  Text,

  TouchableOpacity, View
} from 'react-native';
import Modal from 'react-native-modal';
import ActionSheet from './src/actionSheet';

const App = () => {
  const actionItems = [
    {
      id: 1,
      label: 'Action Item 1',
      onPress: () => {
      }
    },
    {
      id: 2,
      label: 'Action Item 2',
      onPress: () => {
      }
    },
    {
      id: 3,
      label: 'Action Item 3',
      onPress: () => {
      }
    },
    {
      id: 4,
      label: 'Action Item 4',
      onPress: () => {
      }
    },
  ];
  const [actionSheet, setActionSheet] = useState(false);
  const closeActionSheet = () => setActionSheet(false);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 24 }}>Hello,World!</Text>
        <Text style={{ fontSize: 24, margin: 10 }}>React Native Custom Action Sheet</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setActionSheet(true)}>
          <View style={styles.buttonStyle}><Text style={styles.buttonText}>Action Sheet</Text></View>
        </TouchableOpacity>
        <Modal
          isVisible={actionSheet}
          style={{
            margin: 0,
            justifyContent: 'flex-end'
          }}
        >
          <ActionSheet
            actionItems={actionItems}
            onCancel={closeActionSheet}
          />
        </Modal>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonStyle: {
    height: 50,
    backgroundColor: 'rgb(0,98,255)',
    width: Dimensions.get('window').width - 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10
  },
  buttonText: {
    fontSize: 17,
    color: 'rgb(255,255,255)',
  }
});

export default App;
