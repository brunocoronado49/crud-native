import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../style/Style";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.viewBtn}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.navigate("Create")}
        >
          <Text style={styles.btnText}>Crear usuario</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBtn}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.navigate("List")}
        >
          <Text style={styles.btnText}>Ver usuarios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
