import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import estilos from "./src/stylesheets/estilos";

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
