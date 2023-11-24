import { Text, SafeAreaView, StyleSheet, Dimensions, FlatList } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Sorvetes com Array!!!
      </Text>

      <FlatList
      data={arrayDados}
      renderItem={({item})=>
      <SafeAreaView style={styles.containerSorvete}>
      <Text style={styles.textSorvete}> {item.sorvete} </Text>
      </SafeAreaView>
    }
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSorvete:{
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#f1ec81',
    borderRadius: 10,
    padding: 10
  }
});

    const largura = Dimensions.get('screen').width;

    const arrayDados = [
    {sorvete: 'Creme'},
    {sorvete: 'Ovomaltine'},
    {sorvete: 'Flocos'},
    {sorvete: 'Morango'},
    {sorvete: 'Coco'},
    {sorvete: 'Creme de Avelã'},
    {sorvete: 'Maracujá'},
    {sorvete: 'Passas ao Rum'},
    {sorvete: 'Milho'},
    {sorvete: 'Acaí'}
    ];
