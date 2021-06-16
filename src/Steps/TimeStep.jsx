import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

import { order } from '../../Screens/order'

const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"]

const TimeStep = () => {

    // const [showPicker, setShowPicker] = useState(false)
    const [fromWhen, setFromWhen] = useState("")
    const [fromWhenStart, setFromWhenStart] = useState("")
    const [fromWhenEnd, setFromWhenEnd] = useState("")
    const [toWhen, setToWhen] = useState("")
    const [toWhenStart, setToWhenStart] = useState("")
    const [toWhenEnd, setToWhenEnd] = useState("")

    useEffect(() => {
        order.addresses.from.day = fromWhen
        order.addresses.from.timeFrom = fromWhenStart
        order.addresses.from.timeTo = fromWhenEnd
        order.addresses.to.day = toWhen
        order.addresses.to.timeFrom = toWhenStart
        order.addresses.to.timeTo = toWhenEnd
    }, [fromWhen, fromWhenStart, fromWhenEnd, toWhen, toWhenStart, toWhenEnd])



    // const [date, setDate] = useState(new Date());
    // const [mode, setMode] = useState('datetime');
    // const [show, setShow] = useState(false);

    // const onChange = (event, selectedDate) => {
    //     console.log(event);
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'ios');
    //     setDate(currentDate);
    // };

    // const showMode = (currentMode) => {
    //     setShow(true);
    //     setMode(currentMode);
    // };

    // const showDatepicker = () => {
    //     showMode('date');
    // };

    // const showTimepicker = () => {
    //     showMode('time');
    // };




    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <Text>Забрать</Text>
                <View style={styles.timeInputBlock}>
                    <TextInput
                        style={[styles.textField, {flex: 2}]}
                        placeholder="сегодня"
                        // value={`${date.getDate()} ${months[date.getMonth()]}`}
                        value={fromWhen}
                        onChangeText={(value) => {setFromWhen(value)}}
                        // onFocus={() => {
                        //     setMode("date")
                        //     setShowPicker(true)
                        // }}
                        // onBlur={() => {
                        //     setShowPicker(false)
                        // }}
                    />
                    <Text style={{marginHorizontal: 10}}>C</Text>
                    <TextInput
                        style={styles.textField}
                        placeholder="12:00"
                        // value={`${
                        //     date.getHours() > 0 && date.getHours() < 10 ? `0${date.getHours()}`: date.getHours()
                        // }:${date.getMinutes()}`}
                        value={fromWhenStart}
                        onChangeText={(value) => {setFromWhenStart(value)}}
                        // onFocus={() => {
                        //     setMode("time")
                        //     setShowPicker(true)
                        // }}
                        // onBlur={() => {
                        //     setShowPicker(false)
                        // }}
                    />
                    <Text style={{marginHorizontal: 10}}>До</Text>
                    <TextInput
                        style={styles.textField}
                        placeholder="12:00"
                        // value={`${
                        //     date.getHours() > 0 && date.getHours() < 10 ? `0${date.getHours()}`: date.getHours()
                        // }:${date.getMinutes()}`}
                        value={fromWhenEnd}
                        onChangeText={(value) => {setFromWhenEnd(value)}}
                        // onFocus={() => {
                        //     setMode("time")
                        //     setShowPicker(true)
                        // }}
                        // onBlur={() => {
                        //     setShowPicker(false)
                        // }}
                    />
                </View>
            </View>

            {/* {showPicker && <DateTimePicker
                minimumDate={date}
                value={date}
                mode={mode}
                is24Hour={true}
                display="spinner"
                onChange={onChange}
                locale="RU-ru"
            />} */}

            <View style={styles.inputView}>
                <Text>Привезти</Text>
                <View style={styles.timeInputBlock}>
                    <TextInput
                        style={[styles.textField, {flex: 2}]}
                        placeholder="сегодня"
                        value={toWhen}
                        onChangeText={(value) => setToWhen(value)}
                    />
                    <Text style={{marginHorizontal: 10}}>C</Text>
                    <TextInput
                        style={styles.textField}
                        placeholder="12:00"
                        value={toWhenStart}
                        onChangeText={(value) => setToWhenStart(value)}
                    />
                    <Text style={{marginHorizontal: 10}}>До</Text>
                    <TextInput
                        style={styles.textField}
                        placeholder="12:00"
                        value={toWhenEnd}
                        onChangeText={(value) => setToWhenEnd(value)}
                    />
                </View>
            </View>
        </View>
    )
}

export default TimeStep

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    inputView: {
        paddingTop: 20
    },
    textField: {
        paddingVertical: 10,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        borderBottomWidth: 1,
        fontWeight: "bold",
        color: "#FF8E26"
    },
    timeInputBlock: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})
