import React, {Component,useState} from 'react';
import {Text, ScrollView, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Card, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

Icon.loadFont();



class Diy extends Component{

    static navigationOptions = {

        drawerIcon: () => (
            <Icon name="pencil" size={27}/>
        )

    }

    modal(){

        const [modalAberto, abrirModal] = useState(false);
        
    }

    render(){
        return(
            <ScrollView>
                
                <Card>
                    <CardImage 
                        source={require('../imagens/vasoAbacaxi.jpg')} //pra imagem ficar bonitinha deve ter por volta de 1024x756
                        title="Vaso de Abacaxi"
                    />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() =>{}}
                        title="Ver receita"
                        color="green"
                        />
                    </CardAction>
                    <CardContent text={ 
                     <Text> {`
-Para fazer um vaso, é só retirar a
polpa da fruta;

-Lembre-se que o abacaxi é
perecível, e o abacaxi-objeto não
vai durar muito;

-Você pode optar em pintar o
abacaxi por fora, para variar e
fazer vários!

-É importante proteger com um
papel celofane, um copo ou até
mesmo uma garrafa pet cortada,
para a planta não absorver a
acidez da fruta e assim ficar linda
por mais tempo. Coloque
também um pouco d’água para
ficar mais estruturado.
`}
    </Text> 
}/>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/limao.jpg')} //pra imagem ficar bonitinha deve ter por volta de 1024x756
                        title="Desinfetante de limão"
                    />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() =>{}}
                        title="Ver receita"
                        color="green"
                        />
                    </CardAction>
                    <CardContent text={
                        
                        <Text> 
    {`
    - Antes de recorrer aos produtos
    químicos nocivos que prometem
    remover até as piores manchas
    de sujeira;
    - usar a combinação limão
    + bicarbonato de sódio ou sal
    (sal ou bicarbonato atuam como
    um abrasivo)
    - Polvilhe a área suja com um
    abrasivo da sua escolha e, em
    seguida, aplique o suco de limão
    feito a partir da casca.
    - Na sequência, é só esfregar o
    local.
    - Atenção:Cuidado! Não limpe
    áreas sensíveis, como as feitas de
    mármore, com o limão.
    `}
                        </Text>
                    }/>
                </Card>

                <Card>
                    <CardImage 
                        source={require('../imagens/corante.jpg')} //pra imagem ficar bonitinha deve ter por volta de 1024x756
                        title="Corantes naturais"
                    />
                    <CardAction 
                        separator={true} 
                        inColumn={false}>
                        <CardButton
                        onPress={() =>{}}
                        title="Ver receita"
                        color="green"
                        />
                    </CardAction>
                    <CardContent text={
                       
                        <Text> 
    {`
    Ingredientes e materiais
    necessários:

    • 1 xícara de cascas de
    beterraba;
    • 1 xícara de cascas de
    cebola;
    • 1 xícara com folhas de
    repolho vermelho;
    • 1 xícara de espinafre;
    • 1 xícara de cascas de
    laranja;
    • Sal;
    • Vinagre;
    • Panelas pequenas;
    • Água;
    • Coador;
    • Colher de pau;
    • Recipientes de vidro.
    

    
    Como fazer:

    - Cada um dos vegetais
    citados cria cores distintas:
    vermelho (beterraba),
    amarelo (laranja), verde
    (espinafre), azul (repolho
    vermelho) e laranja
    (cebola).
    - É possível usar outros
    alimentos, de acordo com
    as cores desejadas. A
    cúrcuma, também chamada
    de açafrão-da-terra, por
    exemplo, cria um amarelo
    dourado solar e sua cor se
    adere facilmente às fibras
    de tecidos naturais.
    - O cravo-da-índia produz
    cores que vão do laranja e
    amarelo até um tom
    esverdeado - e esses são
    apenas alguns exemplos!
    - Para fazer o tingimento de
    roupas, o primeiro passo é
    colocar cada ingrediente
    para ferver com água.
    - Use panelas distintas para
    cada cor que você quer
    criar. -
    - Leve os legumes ou cascas
    picados ao fogo junto com
    o dobro de água em
    relação à quantidade do
    alimento (no caso da
    receita sugerida seriam
    duas xícaras de água para
    cada panela de corante
    natural).
    - Deixe em fogo médio para
    ferver, durante uma hora.
    - Passado esse tempo,
    desligue o fogo e deixe
    esfriar até que a água atinja
    a temperatura ambiente.
    - Depois disso, use o coador
    e coloque os seus corantes
    naturais nos recipientes de
    vidro.
    - Pronto! Agora é só começar
    o tingimento das suas
    peças de roupa.
    - Para que o corante
    natural pegue bem, use
    uma mistura fixadora
    nos tecidos.
    - No caso de corantes feito à
    base de frutas, ferva o
    tecido em 4 xícaras de
    água com 1/4 de xícara de
    sal por uma hora.
    - Para tinturas feitas com
    vegetais, use uma xícara
    de vinagre diluído em 4
    xícaras de água.
    - Nos dois casos, ferva a
    roupa na mistura fixadora
    por uma hora.
    - Depois de ferver, espere a
    roupa esfriar, escorra e
    coloque a peça
    de roupa ou tecidoem água
    fria antes de começar
    o tingimento.
    - Torça bem o tecido e, em
    seguida, coloque a peça de
    molho no corante natural de
    sua preferência.
    - Deixe a roupa de molho
    no corante natural por pelo
    menos uma hora ou até o
    tecido atingir a cor
    desejada. -
    -
    - Depois, é interessante lavar
    as peças tingidas
    naturalmente em água fria,
    para preservar a cor por
    mais tempo, e separadas
    das outras peças, para
    evitar manchas.
    `}
                        </Text> 
                    }/>
                </Card>
            
            </ScrollView>
        );
    }
}

export default Diy;