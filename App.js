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
    justifyContent: "space-between",
  },

  cabecalho: {
    backgroundColor: "#213452",
    flex: 1,
    justifyContent: "center",
  },

  conteudo: {
    backgroundColor: "#5b90e3",
    flex: 4,
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 8,
  },

  rodape: {
    backgroundColor: "#213452",
    flex: 0.7,
  },

  // Formatação do texto
  textoCabecalho: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "400",
    color: "#000",
  },

  textoConteudo: {
    marginTop: 20,
    fontSize: 16,
    marginHorizontal: 6,
  },

  textoRodape: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    color: "#fff",
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
      <StatusBar barStyle="light-content" />

      {/* Passando a propriedade que criamos com o objeto onde fizemos a estilização */}
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text style={estilos.textoCabecalho}>@_Tanaka11_</Text>
        </View>

        <View style={estilos.conteudo}>
          <Text style={estilos.subtitulo}>Conteudo</Text>

          <Text style={estilos.textoConteudo}>
            Lorem ipsum sociosqu dictum ut semper nostra tincidunt feugiat
            suspendisse, duis pharetra etiam quam porta consequat potenti.
            lobortis vestibulum justo turpis cras aliquet molestie aptent
            scelerisque, congue faucibus nunc ultrices suspendisse mollis dolor
            ipsum lorem, ipsum sodales blandit id primis gravida laoreet.
          </Text>

          <Text style={estilos.textoConteudo}>
            Lorem ipsum sociosqu dictum ut semper nostra tincidunt feugiat
            suspendisse, duis pharetra etiam quam porta consequat potenti.
            lobortis vestibulum justo turpis cras aliquet molestie aptent
            scelerisque, congue faucibus nunc ultrices suspendisse mollis dolor
            ipsum lorem, ipsum sodales blandit id primis gravida laoreet.
          </Text>
        </View>

        <View style={estilos.rodape}>
          <Text style={estilos.textoRodape}>Rodapé</Text>
          <Button title="Clique Aqui! 🎭" onPress={click} />
        </View>
      </SafeAreaView>
    </>
  );
}
