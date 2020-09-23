import React, { Component } from 'react';
import { StyleSheet, Text, View , Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';

// folha de estilos abaixo

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: 'center',
  },

  keyboardAvoid:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#aeead3',
  },

  logo: {
    marginTop:15,
    width: 150,
    height: 150,
    borderRadius: 100,
    },

    input: {
      marginTop: 15,
      padding: 10,
      width: 300,
      backgroundColor: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      borderRadius: 3
    },

    botao: {
      width: 300,
      height: 42,
      backgroundColor:'black',
      marginTop: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:0.5
    },

    botaoText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
    },
})

export default function Cadastro(){

  const checkReg= () => {// função para checar se o registro pode ser efetuado
    alert("Feito!", "Cadastro efetuado com sucesso");
  }

  return (// campos para cadastro
      
     <KeyboardAvoidingView style={styles.keyboardAvoid} enabled >
       <ScrollView>
         <View style={styles.container}>
           
           <Image
             source= {require('../imagens/logo.png')}
             style={styles.logo}
           />

           <TextInput
             style={styles.input}
             placeholder="Nome Completo"
           />

           <TextInput
             style={styles.input}
             placeholder="Data de nascimento"
           />

           <TextInput
             style={styles.input}
             placeholder="Cidade"
           />

           <TextInput
             style={styles.input}
             placeholder="Estado"
           />

           <TextInput
             style={styles.input}
             placeholder="Digite seu email"
           />

           <TextInput
             style={styles.input}
             secureTextEntry={true}
             placeholder="Digite sua senha"
           />

           <TextInput
             style={styles.input}
             secureTextEntry={true}
             placeholder="Confirme sua senha"
           />

           <TouchableOpacity
             style={styles.botao}
             onPress={ () => {checkReg()} }
           >
             <Text style={styles.botaoText}>
               Cadastre-se
             </Text>
           </TouchableOpacity>
         </View>
       </ScrollView>
     </KeyboardAvoidingView>
  )

};
