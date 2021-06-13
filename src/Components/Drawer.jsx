import React from 'react'
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'

import {
    NewOrderIcon,
    SearchOrdersIcon,
    OrdersIcon,
    ChatIcon,
    HumanIcon
  } from '../../assets/icons';

const Drawer = ({width}) => {
    return (
        <SafeAreaView>
          <View style={styles.wrapper}>
            <View style={[styles.drawer, {width: width}]}>
                <TouchableOpacity style={styles.drawerProfile}>
                    <View style={{
                    width: 75,
                    height: 75,
                    borderRadius: 50,
                    backgroundColor: "#f6f6f6"
                    }}></View>
                    <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 18, fontWeight: "900"}}>Никита C.</Text>
                    <View style={{flexDirection: "row"}}>
                        <Text>Рейтинг</Text>
                        <Text style={{fontWeight: "bold", marginLeft: 5}}>4.9</Text>
                    </View>
                    </View>
                </TouchableOpacity>
                <View style={{
                  borderColor: "rgba(0, 0, 0, 0.05)",
                  borderWidth: 1
                }} />
                <ScrollView showsVerticalScrollIndicator={false}>
                  <TabbarItem icon={<NewOrderIcon />} title="Заказать доставку" />
                  <TabbarItem icon={<SearchOrdersIcon />} title="Найти заказ" />
                  <TabbarItem icon={<OrdersIcon />} title="Мои заказы" />
                  <TabbarItem icon={<ChatIcon color="black" />} title="Чат" />
                  <TabbarItem icon={<HumanIcon color="white" />} title="Стать курьером" backgroundColor="#FF8E26" />
                </ScrollView>
            </View>
          </View>
        </SafeAreaView>
    )
}

const TabbarItem = ({icon, title, backgroundColor}) => {
    return (
      <TouchableOpacity>
        <View style={[styles.tabbarItem, {
          backgroundColor: backgroundColor,
          borderRadius: 10
        }]}>
          <View style={{marginRight: 10}}>{icon}</View>
          <Text style={{fontSize: 18, color: backgroundColor ? 'white' : 'black'}}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

export default Drawer


const styles = StyleSheet.create({
    wrapper: {
      height: "100%",
      paddingHorizontal: 16
    },
    drawer: {
      flexGrow: 1,
      marginTop: 20
    },
    drawerProfile: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 24
    },
    tabbarItem: {
      flexDirection: "row",
      padding: 10,
      marginBottom: 10
    }
  });
  