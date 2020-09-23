import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
class Registrador extends Component{


    render(){
        return(
            <View>
                <Text style={{textAlign:"center", fontSize:15, marginTop:15}}>Nenhum Produto registrado</Text>
                <TouchableOpacity style={{margin:5,
        width: 150,
        height: 40,
        alignSelf: 'center',
        backgroundColor: '#aeead3',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10}}>
                    <Text style={{color:'green',
        alignSelf: 'center'}}>Registrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Registrador;