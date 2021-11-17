import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text, useWindowDimensions, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import color from '../../../assets/theme/color';
import styles from './styles'

const CustomButton = ({title, secondary, primary, danger, disabled, loading, onPress}) => {


    const getBgColor = () => {
        if (disabled) {
            return color.grey;
        }
        if (primary) {
            return color.primary;
        }
        if (danger) {
            return color.danger
        } 
        if (secondary) {
            return color.secondary
        }
    }
    return (
        <TouchableOpacity disabled={disabled} style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
            <View style={[styles.loaderSection]}>
                {loading && <ActivityIndicator color={primary ? color.secondary : color.primary}/>}
            {title && <Text style={{color: disabled ? 'black' : color.white, paddingLeft: loading ? 5 : 0}}>{title}</Text>}
            </View>

        </TouchableOpacity>
    )
}

export default CustomButton;