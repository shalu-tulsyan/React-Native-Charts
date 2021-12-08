import React from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Chart from './components/Charts';

export default function App() {
  return (
    <SafeAreaProvider >
      <Chart />
    </SafeAreaProvider>
  );
}
