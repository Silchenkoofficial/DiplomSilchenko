import React, {useRef} from 'react'
import { View, Text, Dimensions, TouchableOpacity, Animated, StyleSheet } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack';

import {MenuIcon} from '../assets/icons';
import { Ionicons } from '@expo/vector-icons';

import {Drawer} from './../src/Components';
import Home from './Home';
import NewOrder from './NewOrder';

const SCREEN_WIDTH = Dimensions.get('window').width
const Stack = createStackNavigator();

const Wrapper = ({showMenu, toggleMenu}) => {

    const offsetDrawer = useRef(new Animated.Value(0)).current;
    const scaleDrawer = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    const animationMenu = () => {
        Animated.timing(scaleDrawer, {
          toValue: showMenu ? 1 : 0.88,
          duration: 300,
          useNativeDriver: true
        })
        .start()
    
        Animated.timing(offsetDrawer, {
          toValue: showMenu ? 0 : SCREEN_WIDTH - SCREEN_WIDTH / 6,
          duration: 300,
          useNativeDriver: true
        })
        .start()
    
        Animated.timing(closeButtonOffset, {
          toValue: !showMenu ? -20 : 0,
          duration: 300,
          useNativeDriver: true
        })
        .start()
    
        toggleMenu();

    }

    return (
        <Animated.View style={[styles.mainScreen, {
            overflow: "hidden",
            borderRadius: showMenu ? 15 : 0,
            transform: [
            {scale: scaleDrawer},
            {translateX: offsetDrawer}
            ]
        }]}>
            <Animated.View style={{
                flex: 1,
                transform: [{
                    translateY: closeButtonOffset
                }]
            }}>
            <Stack.Navigator>
                {/* MAIN SCREEN */}
                <Stack.Screen name="Home" options={{headerShown: false, headerTitle: "Главная"}}>
                {({navigation}) => (
                    <>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => animationMenu()}>
                            <MenuIcon isOpen={showMenu} />
                        </TouchableOpacity>
                        <Text style={{fontSize: 24, fontFamily: "LeckerliOne", color: "white"}}>Liskin</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <Ionicons name={'chatbubbles'} style={{fontSize: 30, color: "white"}} />
                        </TouchableOpacity>
                    </View>
                    <Home navigation={navigation} />
                    </>
                )}
                </Stack.Screen>
                {/* NEW ORDER SCREEN */}
                <Stack.Screen name="NewOrder" options={{
                    headerShown: true,
                    headerTitle: "Новый заказ",
                    headerTintColor: "#FF8E26",
                    headerBackTitleVisible: true
                }}>
                    {() => (
                        <View style={styles.mainContent}>
                            <NewOrder />
                        </View>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
            </Animated.View>
        </Animated.View>
    )
}

export default Wrapper

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
        // paddingHorizontal: 16
    }
});