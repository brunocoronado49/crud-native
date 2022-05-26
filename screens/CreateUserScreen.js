import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { styles } from "../style/Style";
import { initialValues } from "../data/stateValues";
import { handleChange, saveNewUser } from "../hooks/formFunctions";

const CreateUserScreen = () => {
  const [user, setUser] = useState(initialValues);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create user</Text>
      <View style={styles.viewTextInput}>
        <TextInput
          placeholder="Username"
          onChangeText={(value) =>
            handleChange("username", value, user, setUser)
          }
        />
      </View>
      <View style={styles.viewTextInput}>
        <TextInput
          placeholder="Email"
          onChangeText={(value) => handleChange("email", value, user, setUser)}
        />
      </View>
      <View style={styles.viewTextInput}>
        <TextInput
          placeholder="Phone"
          onChangeText={(value) => handleChange("phone", value, user, setUser)}
        />
      </View>
      <View>
        <Button
          style={styles.btnForm}
          title="Save User"
          onPress={() => saveNewUser(user)}
        />
      </View>
    </ScrollView>
  );
};

export default CreateUserScreen;
