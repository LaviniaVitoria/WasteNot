import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import { withBadge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

var item=0;
const CartBadge = withBadge(item) (Icon) // icon do carrinho com badge, sendo ela a variavel "item"

export default function header({navigation}){

    const openMenu = () =>{
        navigation.toggleDrawer();
    }

    const openCart = () =>{
        navigation.navigate('Carrinho');
    }

    return(
        <View style={styles.header}>
            <View style={styles.leftIcon}>
                <TouchableHighlight onPress={()=>openMenu()}>
                    <Icon name="navicon" size={50} color="#FFF"/>
                </TouchableHighlight>
            </View>

            <View>
                <Text style ={styles.headerText}>
                    Waste Not <Image 
                                source= {require('../App/imagens/logo.png')}
                                style={styles.logo}/>
                </Text>
            </View>

            <TouchableHighlight style={styles.botaoCart} onPress={()=>openCart()}>
                <CartBadge
                    type="EvilIcons"
                    name="cart"
                    size={40}
                    color="#FFF"
                    />
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    leftIcon:{
        position:'absolute',
        left:1,
    },
    botaoCart:{
        position:'absolute',
        right:10
    },
    headerText:{
        color: 'green',
        backgroundColor: '#aeead3',
        letterSpacing: 1,
        fontSize:25,
    },
    logo:{
        width: 30,
        height: 30,
        borderRadius: 20,
    }
})