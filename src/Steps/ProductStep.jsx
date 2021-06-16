import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { order } from '../../Screens/order'

const products = ["Документы", "Подарок", "Цветы", "Обувь", "Другое"]
const weights = ["До 1 кг.", "До 5 кг.", "До 10 кг.", "До 15 кг."]

const ProductStep = () => {

    const [productValue, setProductValue] = useState("");
    const [weightValue, setWeightValue] = useState("До 1 кг.");

    useEffect(() => {
        order.product = productValue
        order.weight = weightValue
    }, [productValue, weightValue])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <Text>Что курьер повезет?</Text>
                    <TextInput
                        style={styles.textField}
                        placeholder="Что везем?"
                        value={productValue}
                        onChangeText={(value) => {
                            setProductValue(value)
                        }}
                    />
                </View>
            </View>
            <View style={styles.scrollViewBlock}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {products.map((product, i) => (
                        <View key={i} style={{
                            marginRight: i === products.length - 1 ? 16 : 0,
                            marginLeft: i === 0 ? 26 : 0
                        }}>
                            <TouchableOpacity
                                style={styles.scrollItem}
                                onPress={() => {
                                    setProductValue(product)
                                }}
                            >
                                <Text style={styles.scrollItemText}>{product}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <Text>Сколько весит Ваша посылка?</Text>
                </View>
            </View>
            <View style={styles.scrollViewBlock}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {weights.map((weight, i) => (
                        <View key={i} style={{
                            marginRight: i === weights.length - 1 ? 16 : 0,
                            marginLeft: i === 0 ? 26 : 0
                        }}>
                            <TouchableOpacity style={[styles.scrollItem, {
                                backgroundColor: weightValue === weight ? "#FF8E26" : "transparent"
                            }]} onPress={() => {
                                setWeightValue(weight)
                            }}>
                                <Text style={[styles.scrollItemText, {
                                    color: weightValue === weight ? "white" : "#FF8E26"
                                }]}>{weight}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    )
}

export default ProductStep

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