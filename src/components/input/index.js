import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text, useWindowDimensions } from 'react-native';
import color from '../../../assets/theme/color';
import styles from './styles'

const Input = ({onChangeText, iconPosition, style, value, label, icon, error, ...props}) => {
    const [focused, setFocused] = React.useState(false)

    const getFlexDirection = () => {
        if(icon && iconPosition) {
            if(iconPosition === 'left') {
                return 'row';
            } else if (iconPosition === 'right') {
                return 'row-reverse';
            }
        }
    }

    const getBorderColor = () => {
        if (focused) {
            return color.primary;
        }
        if (error) {
            return color.danger
        } else {
            return color.grey;
        }
    }
    return (
        <View style={styles.inputContainer}>

            {label && <Text>{label}</Text>}

            <View style={[styles.wrapper, {alignItems: icon ? 'center' : 'baseline'}, { borderColor: getBorderColor(), flexDirection: getFlexDirection()}]}>
                <View>{icon && icon}</View>
            <TextInput
        style={[styles.textInput, style]}
        onChangeText={onChangeText}
        value={value}
        onFocus={() => {
            setFocused(true)
        }}
        onBlur={() => {
            setFocused(false)
        }}
        {...props}
      />
            </View>

            {error && <Text style={styles.error}>{error}</Text>}
             
        </View>
    )
}

export default Input;