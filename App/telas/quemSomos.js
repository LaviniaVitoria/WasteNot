import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont(); 

class QuemSomos extends Component{

    static navigationOptions = {
        title:'Quem Somos?',
        drawerIcon: () => (
            <Icon name="question" size={27}/>
        )

    }

    render(){
        return(
            <ScrollView>
                <Card>
                    <CardImage 
                        source={require('../imagens/lav.png')} //pra imagem ficar bonitinha tem q ser 1024x756
                        title="Lavinia Vitória"
                    />
                    <CardTitle
                        subtitle="Função"
                    />
                    <CardContent text="Responsavel por:" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => {}}
                        title="E-mail de contato"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/vane.png')} 
                        title="Vanessa Cypriano"
                    />
                    <CardTitle
                        subtitle="Função"
                    />
                    <CardContent text="Responsavel por:" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => {}}
                        title="E-mail de contato"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/liv.png')} 
                        title="Lívia Melo"
                    />
                    <CardTitle
                        subtitle="Função"
                    />
                    <CardContent text="Responsavel por:" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => {}}
                        title="E-mail de contato"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/loh.png')} 
                        title="Lohayne Muriel"
                    />
                    <CardTitle
                        subtitle="Função"
                    />
                    <CardContent text="Responsavel por:" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => {}}
                        title="E-mail de contato"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/lari.png')} 
                        title="Larissa Farias"
                    />
                    <CardTitle
                        subtitle="Função"
                    />
                    <CardContent text="Responsavel por:" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => {}}
                        title="E-mail de contato"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>
            </ScrollView>
        );
    }
}

export default QuemSomos;