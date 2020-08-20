import React, {Component} from 'react';
import {SafeAreaView, Text, StyleSheet, ScrollView, View, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {TouchableOpacity } from 'react-native-gesture-handler';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

Icon.loadFont();

var imagemPerfil = '../imagens/random.jpg';
var imagemCapa = '../imagens/corante.jpg';

const data = [
    { quarter: 1, earnings: 13 },
    { quarter: 2, earnings: 16 },
    { quarter: 3, earnings: 14 }
  ];

class Perfil extends Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="user" size={27}/>
        )

    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

            
                <View style={{ alignSelf: "center" }}>
                    <ImageBackground source={require(imagemCapa)} style={styles.imageBackground}>
                        <View style={styles.profileImage}>
                            <Image source={require(imagemPerfil)} style={styles.image}/>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Alice Mendes</Text>
                    <Text style={styles.text}>Limeira-SP, 05/10/2042,{'\n'} AliceMendes99@gmail.com</Text>
                </View>

                <View>
                    
                <TouchableOpacity style={styles.botaoDados} onPress={()=>alert("Em desenvolvimento ;)")}>
                    <Text style={styles.botaoDadosText}>Alterar Dados</Text>
                </TouchableOpacity>

                </View>

                <VictoryChart width={350} height={259} domainPadding={20} theme={VictoryTheme.material}>
                    <VictoryBar 
                        style={{ data: { fill: "#aeead3" } }}  
                        data={data} 
                        x="quarter" 
                        y="earnings"
                        barRatio={0.5}
                    />
                </VictoryChart>

            </ScrollView>
        </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    botaoDados:{
        width: 110,
        height: 42,
        backgroundColor:'#f5f5f0',
        marginTop: 5,
        borderRadius: 4,
        alignSelf: 'center',
        alignItems:'center',
        justifyContent: 'center',
    },
    botaoDadosText:{
        fontSize: 16,
        color: '#343232'
    },
    text: {
        textAlign:'center',
        color: "#52575D",
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        borderRadius: 100,
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 150,
        height: 150,
        marginTop: 5,
        overflow: "hidden",
        alignSelf:'center'
    },
    
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
    },
    imageBackground:{
        height:170,
        width:400,
        resizeMode: 'contain'
    }
});

export default Perfil;