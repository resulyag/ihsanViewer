import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const MyWeb = () => {
  return (
    <WebView
      source={{uri: 'https://ihsangazisiyez.com.tr'}}
      style={{marginTop: 20}}
    />
  );
};

export default MyWeb;
