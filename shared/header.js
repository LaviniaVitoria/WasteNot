import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

export default function header(){
    return(
        <View style={styles.header}>
            <View> 
                <Text style ={styles.headerText}>
                    Waste Not
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    headerText:{
        color: 'green',
        backgroundColor: '#aeead3',
        letterSpacing: 1,
    },
})