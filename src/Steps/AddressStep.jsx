import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import { order } from '../../Screens/order'

const AddressStep = () => {

    const [addressFrom, setAddressFrom] = useState("")
    const [addressTo, setAddressTo] = useState("")

    useEffect(() => {
        order.addresses.from.address = addressFrom
        order.addresses.to.address = addressTo
    }, [addressFrom, addressTo])

    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <Text>Откуда</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="ул. Большая Морская, д. 67"
                    value={addressFrom}
                    onChangeText={(value) => {
                        setAddressFrom(value)
                    }}
                />
            </View>
            <View style={styles.inputView}>
                <Text>Куда</Text>
                <TextInput
                    style={styles.textField}
                    placeholder="ул. Большая Морская, д. 67"
                    value={addressTo}
                    onChangeText={(value) => {
                        setAddressTo(value)
                    }}
                />
            </View>
        </View>
    )
}

export default AddressStep

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
    }
})
