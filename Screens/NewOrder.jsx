import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

const NewOrderStack = createStackNavigator();

const NewOrder = () => {
    return (
        <ScrollView style={styles.order}>
            <Text>Step 1</Text>
        </ScrollView>
    )
}

export default NewOrder

const styles = StyleSheet.create({
    order: {
        flex: 1,
        width: "100%",
        paddingTop: 20,
    }
});
