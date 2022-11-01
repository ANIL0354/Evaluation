import React, { useState } from 'react';
import { Text, View,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import styles from './styles';
import Button from '../component/Button';
const Home = ({
    navigation,
}) => {
    const [name, setName] = useState('')
    const [loader, setloader] = useState(false)
   const handleName = (text) => {
        setName(text?.trim());
   };

    const submit = (name) => {
        setloader(true)
        fetch(
        "https://us-central1-oceanfriends-71bae.cloudfunctions.net/getAccessProfiles",
        {
            method: "POST",
            body: JSON.stringify({
            data: { userId: "sr4Z21Tqg0VupvjEDq5Bg51gosg2" }
            }),
            headers: {
            "content-type": "application/json"
            }
        }
        )
        .then((response) => response.json())
        .then((json) => {
            setloader(false)
            navigation.navigate("SelecProfile" , {data:json.result})
        })
            .catch((err) => {
            alert("error",JSON.stringify(err))
            setloader(false)
                console.log("err", err);
        });
  };
    return (
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{}}
        contentContainerStyle={{flex:1}}
      >
        <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={handleName}
        />
        <Button
            loader={loader}
            disabled={!name}
             submit={() => submit(name)}/>
            </View>
        </ScrollView>
    )
}

export default Home;
