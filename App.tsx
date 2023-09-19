/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Crypto from 'react-native-quick-crypto';

import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    const hashed = Crypto.createHash('sha256')
      .update('Damn, Margelo writes hella good software!')
      .digest('hex');
  }, []);
  return <SafeAreaView></SafeAreaView>;
}

export default App;
