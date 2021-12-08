import React from 'react';
import { LineChart } from 'react-native-wagmi-charts';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {
    timestamp: 1625945400000,
    value: 33575.25,
  },
  {
    timestamp: 1625946300000,
    value: 33545.25,
  },
  {
    timestamp: 1625947200000,
    value: 33510.25,
  },
  {
    timestamp: 1625948100000,
    value: 33215.25,
  },
];

export default function Chart() {
  return (
    <SafeAreaView>
      <LineChart.Provider data={data}>
        <LineChart>
          <LineChart.Path />
        </LineChart>
      </LineChart.Provider>
    </SafeAreaView>
  );
}