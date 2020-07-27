import React, {Component} from 'react';
import {ScrollView, Clipboard} from 'react-native';
import { Card, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Icon from 'react-native-vector-icons/EvilIcons';
Icon.loadFont(); 

const setEmail = (email) =>{// função para copiar o e-mail para a área de transferência 

    Clipboard.setString(email)
    alert("E-mail copiado para a área de transferência")

}

class QuemSomos extends Component{

    static navigationOptions = {// nome no drawer
        title:'Quem Somos?',
        drawerIcon: () => ( // icone no drawer
            <Icon name="question" size={27}/>
        )

    }

    render(){
        return( // cards dos membros com: nome/função/e-mail
            <ScrollView>
                <Card>
                    <CardImage 
                        source={require('../imagens/lav.png')} //pra imagem ficar bonitinha deve ter por volta de 1024x756
                        title="Lavinia Vitória"
                    />
                    <CardContent text="Desenvolvedora front e back-end, coordenadora de produção, branding e marketing digital" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => setEmail("laviniaguazzi@gmail.com")}
                        title="laviniaguazzi@gmail.com"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/vane.png')} 
                        title="Vanessa Cypriano"
                    />
                    <CardContent text="Gerente de produção, prototipagem, marketing digital e branding" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => setEmail("Vcypriano@outlook.com")}
                        title="Vcypriano@outlook.com"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/liv.png')} 
                        title="Lívia Melo"
                    />
                    <CardContent text="Gerente de produção, prototipagem e negócios" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => setEmail("liviamelo479@gmail.com")}
                        title="liviamelo479@gmail.com"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/loh.png')} 
                        title="Lohayne Muriel"
                    />
                    <CardContent text="Desenvolvedora back-end e prototipagem eletrônica" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => setEmail("lohaynemuriel123@gmail.com")}
                        title="lohaynemuriel123@gmail.com"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/lari.png')} 
                        title="Larissa Farias"
                    />
                    <CardContent text="Desenvolvedora back-end e prototipagem eletrônica" />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() => setEmail("larissa.lfdm@gmail.com")}
                        title="larissa.lfdm@gmail.com"
                        color="#FEB557"
                        />
                    </CardAction>
                </Card>
            </ScrollView>
        );
    }
}

export default QuemSomos;