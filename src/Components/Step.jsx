import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

import {ProductStep, AddressStep, TimeStep, PhoneStep} from './../Steps';

const {width, height} = Dimensions.get('window');

const Step = ({title, onPressNext, onPressPrev, next, prev, stepType}) => {
    let disabledNext = {
        opacity: next ? 1 : 0.2
    }
    let disabledPrev = {
        opacity: prev ? 1 : 0.2
    }
    return (
        <View style={styles.step}>
            <View style={{flex: 1}}>
                <Text style={styles.title}>{title}</Text>
                {
                    stepType === 'product' && (
                        <ProductStep />
                    )
                }
                {
                    stepType === 'address' && (
                        <AddressStep />
                    )
                }
                {
                    stepType === 'time' && (
                        <TimeStep />
                    )
                }
                {
                    stepType === 'phone' && (
                        <PhoneStep />
                    )
                }
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity onPress={onPressPrev} style={[styles.nextButton, disabledPrev]}>
                    <Text style={styles.nextButtonText}>Назад</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressNext} style={[styles.nextButton, disabledNext]}>
                    <Text style={styles.nextButtonText}>Далее</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Step

const styles = StyleSheet.create({
    step: {
        marginHorizontal: 16,
        width: width - 32,
    },
    nextButton: {
        width: 0.9 * width / 2,
        backgroundColor: "#FF8E26",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 50
    },
    nextButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    title: {
        fontSize: 18,
        fontWeight: "600"
    }
});
