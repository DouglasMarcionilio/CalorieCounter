import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";

const {width, height} = Dimensions.get("window");

const style = () => StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    supMenu: {
        height: height * .05,
        width: '60%',
        borderBottomRightRadius: 150,
        backgroundColor: '#624BFF',
        elevation: 10,
        justifyContent: "center"
    },
    TitleSup: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: "center",

    },
    principalView: {
        justifyContent: "space-around",
        flex: 1,
    },
    viewBottom: {
        height: height * .1,
    }
    

});


export default style;
