import { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from "react-native";
import { getUsers } from "../hooks/formFunctions";
import { styles } from "../style/Style";

const UsersListScreen = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers((query) => {
      const list = [];
      query.docs.forEach((doc) => {
        const { username, email, phone } = doc.data();
        list.push({
          id: doc.id,
          username,
          email,
          phone,
        });
      });
      setUsers(list);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Usuarios</Text>
      <View style={styles.viewBtn}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => props.navigation.navigate("Create")}
        >
          <Text style={styles.btnText}>Crear usuario</Text>
        </TouchableOpacity>
      </View>
      return (
      <SafeAreaView>
        <FlatList
          data={users}
          renderItem={
          // Crear un componente que renderice los items de la lista
            users.map(u => <Text>{u.username}</Text>)
          }
          keyExtractor={(user) => user.id}
        />
      </SafeAreaView>
      );
    </ScrollView>
  );
};

export default UsersListScreen;
