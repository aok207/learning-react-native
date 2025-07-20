import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/auth.style";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <TouchableOpacity
        onPress={() => {
          alert("Button Pressed!");
        }}
      >
        <Text>Touch Me</Text>
      </TouchableOpacity>

      <Link href={"/(tabs)/notifications"}>
        <Text>Visit The Notification Screen</Text>
      </Link>

      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6UWJ2NIYLhHM3skc9SdG3YYo2-S0e_q_Uw&s",
        }}
        style={{ width: 400, height: 200 }}
      />
    </View>
  );
}
