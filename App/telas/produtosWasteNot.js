import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
 
class produtosWasteNot extends React.Component{

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {/*(informações de cobrança, como cobrar)
                    produtos da empresa (loja padrão com carrinho, carrinho q atualiza o número de produtos conforme a pessoa adiciona coisas)*/}

                    <View style={styles.produto}>
                        <Image source={require('../imagens/sensor2.jpg')} style={styles.imagem}/>
                        
                        <Text style={styles.titulo}>
                            Sensor para composteira - Waste Not{`\n`}
                            R$69,99
                        </Text>

                        <TouchableOpacity style={styles.botao} onPress={()=>alert('Em desenvolvimento ;)')}>
                            <Text style={styles.textoBotao}>
                                Adicionar ao carrinho
                            </Text>
                         </TouchableOpacity>
                    </View>  

                    <View style={styles.produto}>
                        <Image source={require('../imagens/composteirawn.jpeg')} style={styles.imagem}/>
                        
                        <Text style={styles.titulo}>
                            Composteira - Waste Not{`\n`}
                            R$59,99
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
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5
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
        width: 400,
        height: 200
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

export default produtosWasteNot;