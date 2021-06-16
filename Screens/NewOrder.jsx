import React, {useRef} from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Step } from '../src/Components';
import { order } from './order';

const steps = [
    {title: "Посылка", next: true, prev: false, step: "product"},
    {title: "Адрес", next: true, prev: true, step: "address"},
    {title: "Время", next: true, prev: true, step: "time"},
    {title: "Телефон", next: true, prev: true, step: "phone"},
]


const {width, height} = Dimensions.get('window');

const NewOrder = () => {
    const scroll = useRef(null);
    return (
        <View style={styles.order} >
            <ScrollView
                ref={scroll}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width}
                decelerationRate="fast"
                bounces={false}
                scrollEnabled={false}
            >
                {steps.map((step, i) => (
                    <Step onPressNext={() => {
                        if (scroll.current) {
                            step.next && scroll.current.scrollTo({x: width * (i + 1)})
                            console.log(order);
                        }
                    }} onPressPrev={() => {
                        if (scroll.current) {
                            step.prev && scroll.current.scrollTo({x: width * (i - 1)})
                            console.log(order);
                        }
                    }} title={step.title} stepType={step.step} key={i} next={step.next} prev={step.prev} />
                ))}
            </ScrollView>
        </View>
    )
}

export default NewOrder

const styles = StyleSheet.create({
    order: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "white",
    }
});
