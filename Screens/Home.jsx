import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
    return (
        <>
            <View style={styles.mainContent}>
                <TouchableOpacity style={{
                backgroundColor: "white",
                padding: 24,
                borderRadius: 50
                }} onPress={() => {
                navigation.navigate('NewOrder')
                }}>
                    <Text style={{fontSize: 18, fontWeight: "bold", color: "#FF8E26"}}>Заказать доставку</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    mainScreen: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "#FF8E26",
      flexDirection: "column",
      shadowColor: "black",
      shadowOpacity: 0.4,
      shadowOffset: {
        width: -2
      }
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 40,
      paddingHorizontal: 16,
      backgroundColor: "#FF8E26"
    },
    mainContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF8E26",
    }
  });