import React from 'react'
import Svg, {Rect} from 'react-native-svg'
import {Ionicons} from '@expo/vector-icons';

const MenuIcon = ({isOpen}) => {
    return (
        !isOpen ? 
        <Svg width="26" height="26" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="26" height="4" rx="2" fill="white"/>
            <Rect y="8" width="22" height="4" rx="2" fill="white"/>
            <Rect y="16" width="18" height="4" rx="2" fill="white"/>
        </Svg> : 
        <Ionicons name={'close'} style={{fontSize: 30, color: 'white'}} />

    )
}

export default MenuIcon
