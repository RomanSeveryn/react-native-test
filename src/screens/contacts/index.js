import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../../components/container';

const Contacts = ({ navigation, route, options, back, layout, progress, styleInterpolator  }) => {
    // console.log('navigation', navigation);
    // console.log('route', route);
    // console.log('options', options);
    // console.log('back', back);
    // console.log('layout', layout);
    // console.log('progress', progress);
    // console.log('styleInterpolator', styleInterpolator);
    return (
        <Container style={{padding: 100}}>
            <Text>Hello Contact</Text>
        </Container>
        
    )
}

export default Contacts;