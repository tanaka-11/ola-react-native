import {
  Alert,
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

export default function App() {
  const click = () => {
    Alert.alert("🥶", "Lorem Ipsum");
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <View>
          <Text>@_Tanaka11_</Text>
        </View>

        <View>
          <Text>Lorem Ipsum</Text>
        </View>

        <View>
          <Text>Rodapé</Text>
          <Button title="Clique Aqui! 🎭" onPress={click} />
        </View>
      </SafeAreaView>
    </>
  );
}
