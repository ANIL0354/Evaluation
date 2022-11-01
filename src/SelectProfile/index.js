import React, { useState } from 'react';
import { Text, View,FlatList,TouchableOpacity } from 'react-native';
import Button from '../component/Button';
import styles from './styles';

const SelectProfile = ({
    navigation,route,
}) => {
    const [selectedValue, setSelectedValue] = useState(null)
    const [loader,setloader]=useState(false)

    const renderItem = ({ item } ) => {
        return (
            <View key={item?.user} style={styles.container}>
                <Text style={styles.radioText}>{item?.name}</Text>
				<TouchableOpacity
					style={styles.radioCircle}
                       onPress={() => {
                         setSelectedValue(item?.user)
                    }}>
                {selectedValue === item?.user && <View style={styles.selectedRb} />}
			</TouchableOpacity>
		</View>
        )
    }

       const submit = (name) => {
        setloader(true)
        fetch(
        "https://us-central1-oceanfriends-71bae.cloudfunctions.net/get2daysmeal",
        {
            method: "POST",
            body: JSON.stringify({"data":{
                "profileId": "f777df7f-4810-4968-972c-7976051ec697"
            }}),
            headers: {
            "content-type": "application/json"
            }
        }
        )
        .then((response) => response.json())
        .then((json) => {
            setloader(false)
            navigation.navigate("Meals" , {data:json})
        })
            .catch((err) => {
                alert("error",JSON.stringify(err))
                setloader(false)
                console.log("err", err);
        });
  };
    return (
        <View style={{flex:1}}>
        <FlatList
            contentContainerStyle={{ flexGrow: 1,padding:15}}
            keyExtractor={(item) => item?.user}
            data={route?.params?.data?.result||[]}
            renderItem={renderItem}
            />
            <Button
                loader={loader}
                disabled={!selectedValue}
                submit={submit}
            />
        </View>
    );
}

export default SelectProfile;
