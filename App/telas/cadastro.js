import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View , Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';

class Cadastro extends Component {

  clicou= () => {
    Alert.alert("Feito!", "Cadastro efetuado com sucesso");
  }

  render() {
    return (

      <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={-170}>
        <ScrollView>
          <View style={styles.container}>
              <Text style={styles.title}> Cadastro </Text>

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
          onPress={ () => {this.clicou()} }
          >
            <Text style={styles.botaoText}>Cadastre-se</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#aeead3'
  },

  logo: {
    marginTop:5,
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

    title: {
      marginTop: 10,
      fontSize: 40,
      fontWeight: 'bold'
  }
})

export default Cadastro;
