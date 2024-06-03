import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { bancoExterno } from './firebaseConnection';
import { useEffect, useState } from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

export default function App() {

  const [nome, setNome] = useState('Carregando...');
  const [nome2, setNome2] = useState('');

  useEffect(() => {
    async function pegarDados() {
      const referencia = doc(bancoExterno, "aparelhos", "1")

      getDoc(referencia)
        .then((snap) => {
          setNome(snap.data()?.TV)

        })

        .catch((erro) => {
          console.log(erro)
        })

        onSnapshot(doc(bancoExterno,"aparelhos", "1"), (snap)=>{
          setNome2(snap.data()?.Geladeira)
        })
    }
    pegarDados();

  }, [])


  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}>Informação:{nome}, {nome2} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
