import {StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        marginBottom: 15, borderRadius: 4, padding: 8, borderColor: "grey", backgroundColor: "rgb(253,113,115)"
    },
    mealName: { fontWeight: 'bold', fontSize: 18, color: "#000fff" },
    mealDateType: { fontWeight: '500', fontSize: 14, textTransform: "capitalize", color: "#0000bb" },
    ingredients: { fontStyle: "italic", fontWeight: "700" },
    ingredientName: { textTransform: "capitalize" },
    noMeal:{ fontWeight: 'bold', fontSize: 18 }
});


export default styles
