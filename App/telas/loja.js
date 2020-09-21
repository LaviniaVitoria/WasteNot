import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { ScrollView } from 'react-native-gesture-handler';
Icon.loadFont();


class Loja extends React.Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="cart" size={27}/>
        )

    }

    render(){
        return(
            <ScrollView style={{flex:1}}>
                <View style={styles.container}>
                    {/*(informações de cobrança, como cobrar)
                    produtos da empresa (loja padrão com carrinho, carrinho q atualiza o número de produtos conforme a pessoa adiciona coisas)*/}

                    <View style={styles.produto}>
                        <Image source={require('../imagens/biofertilizante.jpg')} style={styles.imagem}/>
                        
                        <Text style={styles.titulo}>
                            Biofertilizante{`\n`}
                            R$29,99
                        </Text>

                        <TouchableOpacity style={styles.botao} onPress={()=>alert('Em desenvolvimento ;)')}>
                            <Text style={styles.textoBotao}>
                                Adicionar ao carrinho
                            </Text>
                         </TouchableOpacity>
                    </View>  

                    <View style={styles.produto}>
                        <Image source={require('../imagens/chorumeDiluido.jpg')} style={styles.imagem}/>
                        
                        <Text style={styles.titulo}>
                            Fertilizante natural - chorume  diluído(2 litros){`\n`}
                            R$5,00
                        </Text>

                        <TouchableOpacity style={styles.botao} onPress={()=>alert('Em desenvolvimento ;)')}>
                            <Text style={styles.textoBotao}>
                                Adicionar ao carrinho
                            </Text>
                         </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        width:375,
        height:700,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf:"center"
    },
    titulo:{
        fontWeight:'bold',
        textAlign:'center',
        marginTop:5
    },
    produto:{
        backgroundColor:'#f5f5f0',
        marginBottom:20,
        borderRadius:5
    },
    imagem:{
        marginTop:15,
        width:320,
        height:200,
        alignSelf:"center"
    },
    botao:{
        margin:5,
        width: 150,
        height: 40,
        alignSelf: 'flex-end',
        backgroundColor: '#aeead3',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10
    },
    textoBotao:{
        color:'green',
        alignSelf: 'center'
    }

})

export default Loja;