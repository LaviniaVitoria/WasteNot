import React, {Component} from 'react';
import {View,Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont();

class Problemas extends Component{

    render(){
        return(
 
            <View>
                <Text style={{
        textAlign:"center", fontSize:30, marginTop:100}}>
FAQ</Text><Text style={styles.title}>{`
PERGUNTAS FREQUENTES 
E SUGESTÕES`}
                </Text>
            

            <View style={styles.faq}>

                <TouchableOpacity style={styles.botao} onPress={()=>alert("Em desenvolvimento ;)")}>
                    <Icon name="check" size={27} color='green'/>
                    <Text style={styles.botaoText}>
                        ?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>alert("Em desenvolvimento ;)")}>
                    <Icon name="cart" size={27} color='green'/>
                    <Text style={styles.botaoText}>
                        Loja
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>alert("Em desenvolvimento ;)")}>
                    <Icon name="like" size={27} color='green'/>
                    <Text style={styles.botaoText}>
                        Negócios
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>alert("Em desenvolvimento ;)")}>
                    <Icon name="comment" size={27} color='green'/>
                    <Text style={styles.botaoText}>
                        ?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>alert("Em desenvolvimento ;)")}>
                    <Icon name="chart" size={27} color='green'/>
                    <Text style={styles.botaoText}>
                        ?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={()=>alert("Em desenvolvimento ;)")}>
                    <Icon name="exclamation" size={27} color='green'/>
                    <Text style={styles.botaoText}>
                        !
                    </Text>
                </TouchableOpacity>

            </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    faq:{
        flex:1,
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent:'center',
        alignContent:'center'
    },
    title:{
        fontSize:20,
        marginBottom:200,
        textAlign:"center"
    },
    botao:{
        backgroundColor: '#aeead3',
        borderStyle:'solid',
        borderColor: 'black',
        borderRadius: 200,
        width:100,
        height: 100,
        margin:5,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
        
    },
    botaoText:{
        color: 'green',
        textAlign:'center',
        letterSpacing:1,
    },
})

export default Problemas;