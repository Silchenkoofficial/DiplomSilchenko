import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import MaskedInput from 'react-native-masked-input-text'

import { Ionicons } from '@expo/vector-icons'

import { order } from '../../Screens/order'

const paymentAddresses = ["На 1 адресе", "На 2 адресе"];

const PhoneStep = () => {

    const [phoneFrom, setPhoneFrom] = useState("");
    const [phoneTo, setPhoneTo] = useState("");
    const [paymentAddress, setPaymentAddress] = useState("На 1 адресе");

    useEffect(() => {
        order.addresses.from.phone = phoneFrom
        order.addresses.to.phone = phoneTo
        order.paymentAddress = paymentAddress
    }, [phoneFrom, phoneTo, paymentAddress])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <Text>Отправитель</Text>
                    <MaskedInput
                        style={styles.textField}
                        mask={'+7 (000) 000-00-00'}
                        placeholder={'+7 (981) 123-45-67'}
                        value={phoneFrom}
                        onChangeText={(value) => setPhoneFrom(value)}
                    />
                </View>
                <View style={styles.inputView}>
                    <Text>Получатель</Text>
                    <MaskedInput
                        style={styles.textField}
                        mask={'+7 (000) 000-00-00'}
                        placeholder={'+7 (981) 123-45-67'}
                        value={phoneTo}
                        onChangeText={(value) => setPhoneTo(value)}
                    />
                </View>
                <View style={{marginTop: 20, marginLeft: -10, flexDirection: "row", alignItems: "center"}}>
                    <Text style={{fontSize: 18, fontWeight: "600"}}>Оплата</Text>
                    <TouchableOpacity onPress={() => {
                        Alert.alert(
                            "Оплата",
                            "На данный момент действует только оплата наличными. Приносим свои извинения на неудобства",
                            [
                                {
                                    text: "Окей:("
                                },
                            ]
                        )
                    }}>
                        <Ionicons name={"information-circle-outline"} style={{fontSize: 20, marginLeft: 5, color: "#FF8E26"}} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputView}>
                    <Text>Выберите, на каком адресе будет оплата:</Text>
                </View>
            </View>
            <View style={styles.scrollViewBlock}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {paymentAddresses.map((address, i) => (
                    <View key={i} style={{
                        marginRight: i === paymentAddresses.length - 1 ? 16 : 0,
                        marginLeft: i === 0 ? 26 : 0
                    }}>
                        <TouchableOpacity style={[styles.scrollItem, {
                            backgroundColor: paymentAddress === address ? "#FF8E26" : "transparent"
                        }]} onPress={() => {
                            setPaymentAddress(address)
                        }}>
                            <Text style={[styles.scrollItemText, {
                                color: paymentAddress === address ? "white" : "#FF8E26"
                            }]}>{address}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
                </ScrollView>
            </View>
        </>
    )
}

export default PhoneStep

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
    scrollViewBlock: {
        marginTop: 10,
        marginLeft: -16,
        marginRight: -16
    },
    scrollItem: {
        marginRight: 10,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderColor: "#FF8E26",
        borderWidth: 1,
        borderRadius: 10
    },
    scrollItemText: {
        fontWeight: "bold",
        color: "#FF8E26"
    }
})