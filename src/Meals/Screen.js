import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './styles';

const Screen = ({
    item,
}) => {
    return (
        <ScrollView style={{ padding: 20 }}>
            {item?.dietTracking?.map((item,index) => {
                return (
                    <View style={styles.container}>
                        <Text key={index} style={styles.mealName} numberOfLines={3}>{item.mealName}</Text>
                        <Text style={styles.mealDateType}>{item?.mealType + " | " + item?.time}</Text>
                        {item?.ingredients.map((item,index) => {
                            return (
                                <View style={{marginTop:15}}>
                                    <Text style={styles.ingredients}>Ingredients</Text>
                                    <Text key={index} style={styles.ingredientName}>{item?.itemName}</Text>
                                </View>
                            )
                        })}
                    </View>
                )
            })}
            {!item?.dietTracking?.length&&<Text style={styles.noMeal}>No Meal found</Text> }
    </ScrollView>
);
 }

export default Screen;
