import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        backgroundColor: "rgb(253,113,115)",
        padding:10
	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: 'rgb(136,148,220)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: 'rgb(136,148,220)',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
		backgroundColor: 'rgb(136,148,220)',
    },
});

export default styles
