import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import styles from '../styles/loading'

const Loading = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color="#db4f48" />
    </View>
);

export default Loading;