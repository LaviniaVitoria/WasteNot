import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Card, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Icon from 'react-native-vector-icons/EvilIcons';
import { ScrollView } from 'react-native-gesture-handler';
Icon.loadFont();


class HomePage extends React.Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="bell" size={27}/>
        )

    }

    render(){
        return(
            <ScrollView>

                <TouchableOpacity style={styles.botaoComp} onPress={()=>alert('Em desenvolvimento ;)')}>
                    <Text style={styles.textoBotaoComp}>Minha Composteira</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoDropDown} onPress={()=>alert('Em desenvolvimento ;)')}>
                    <Text style={styles.textBtDropDown}> O que é composteira?</Text>
                    <Text style={styles.mais}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoDropDown} onPress={()=>alert('Em desenvolvimento ;)')}>
                    <Text style={styles.textBtDropDown}> O que é composto?</Text>
                    <Text style={styles.mais}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoDropDown} onPress={()=>alert('Em desenvolvimento ;)')}>
                    <Text style={styles.textBtDropDown}> O que é chorume?</Text>
                    <Text style={styles.mais}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botaoDropDown} onPress={()=>alert('Em desenvolvimento ;)')}>
                    <Text style={styles.textBtDropDown}> Todos os alimentos podem ser inseridos na compostagem?</Text>
                    <Text style={styles.mais}>+</Text>
                </TouchableOpacity>

                <Card>
                    <CardImage 
                        source={require('../imagens/maoComPlanta.jpg')} 
                    />
                    <Text style={styles.tituloCard}> O que é compostagem?</Text>
                    <CardContent text={
                        <Text style={styles.textoCard}> 
                            Saiba mais sobre ese processo bioquímico tão importante para a sua vida.
                        </Text>
                    } />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => alert()}
                        title="Proposta"
                        color="green"
                        />

                        <CardButton
                        onPress={() => alert()}
                        title="Composteira"
                        color="green"
                        />
                        
                        <Icon name="share-google" size={27} color="green"/>

                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/comprasvendas.jpg')} 
                    />
                    <Text style={styles.tituloCard}> Venda ou Compre Produtos de outros usuários</Text>
                    <CardContent text={
                        <Text style={styles.textoCard}> 
                            Você pode conseguir uma renda extra ou adquirir o melhor material para seu cultivo.
                        </Text>
                    } />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => alert()}
                        title="Ir"
                        color="green"
                        />

                        <CardButton
                        onPress={() => alert()}
                        title="Ignorar"
                        color="green"
                        />
                        
                        <Icon name="share-google" size={27} color="green"/>

                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/composteira.jpg')} 
                    />
                    <Text style={styles.tituloCard}> Compre sua própria composteira tecnológica e personalizada</Text>
                    <CardContent text={
                        <Text style={styles.textoCard}> 
                            Saiba mais sobre como você pode adquirir esse produto.
                        </Text>
                    } />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => alert()}
                        title="Ir"
                        color="green"
                        />

                        <CardButton
                        onPress={() => alert()}
                        title="Ignorar"
                        color="green"
                        />
                        
                        <Icon name="share-google" size={27} color="green"/>

                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/website.png')} 
                    />
                    <Text style={styles.tituloCard}> Conheça nosso site</Text>
                    <CardContent text={
                        <Text style={styles.textoCard}> 
                            Conheça nosso site e enteda mais sobre a proposta do nosso projeto e nos ajude a espalhar essa ideia.
                        </Text>
                    } />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => alert()}
                        title="Ir"
                        color="green"
                        />

                        <CardButton
                        onPress={() => alert()}
                        title="Ignorar"
                        color="green"
                        />
                        
                        <Icon name="share-google" size={27} color="green"/>

                    </CardAction>
                </Card>
                
                <Card>
                    <CardImage 
                        source={require('../imagens/horta.png')} 
                    />
                    <Text style={styles.tituloCard}> Hortas que encantam</Text>
                    <CardContent text={
                        <Text style={styles.textoCard}> 
                            Saiba como aproveitar o adubo produzido.
                        </Text>
                    } />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => alert()}
                        title="Ir"
                        color="green"
                        />

                        <CardButton
                        onPress={() => alert()}
                        title="Ignorar"
                        color="green"
                        />
                        
                        <Icon name="share-google" size={27} color="green"/>

                    </CardAction>
                </Card>
                <Text style={styles.footer}>
                    "Evitar o desperdício é o início"
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    header:{
        backgroundColor: '#f5f5f0',
    },
    headerText:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:20
    },
    botaoComp:{
        margin:15,
        width: 150,
        height: 40,
        backgroundColor: '#aeead3',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf:"center",
        borderRadius: 10
    },
    textoBotaoComp:{
        color:'green',
        alignSelf: 'center'
    },
    botaoDropDown:{
        backgroundColor: '#f5f5f0',
        marginBottom:10,
    },
    textBtDropDown:{
        margin:5
    },
    mais:{
        fontSize:25,
        alignSelf:'flex-end',
        color:'gray',
        marginRight:15
    },
    tituloCard:{
        fontWeight:"bold",
        alignSelf:'center',
        textAlign:"center",
        fontSize:24,
        flexWrap:'wrap'
    },
    textoCard:{
        fontSize:14,
        textAlign:'center'
    },
    footer:{
        backgroundColor:'#aeead3',
        textAlign:"center",
        color:"green",
        fontSize:20
    }
});

export default HomePage;