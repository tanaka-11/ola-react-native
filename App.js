import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from "react-native";

// CSS
const estilos = StyleSheet.create({
  // Propriedade retornando um objeto com a estilização via js.
  container: {
    backgroundColor: "#466aa6",
    flex: 1,
  },

  cabecalho: {
    backgroundColor: "#213452",
  },

  conteudo: {
    backgroundColor: "lightblue",
  },

  rodape: {
    backgroundColor: "#213452",
  },
});

export default function App() {
  // Função de evento
  const click = () => {
    Alert.alert("🥶", "Lorem Ipsum");
  };

  // Componentes
  return (
    <>
      {/* Barra de Status do Celular */}
      <StatusBar barStyle="default" />

      {/* Passando a propriedade que criamos com o objeto onde fizemos a estilização */}
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>@_Tanaka11_</Text>
        </View>

        <View style={estilos.conteudo}>
          <Text>Lorem Ipsum</Text>
        </View>

        <View style={estilos.rodape}>
          <Text>Rodapé</Text>
          <Button title="Clique Aqui! 🎭" onPress={click} />
        </View>
      </SafeAreaView>
    </>
  );
}
