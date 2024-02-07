import { StyleSheet } from "react-native";

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

export default estilos;
