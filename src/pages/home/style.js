import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
import {backCard, backNomeTitleButton, backColor, titleColor, iconColors} from "../../shared/Consts";

const {width, height} = Dimensions.get("window");

const style = () => StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: backColor,
    },
    supMenu: {
        height: height * .05,
        width: '60%',
        borderBottomRightRadius: 150,
        backgroundColor: titleColor,
        elevation: 10,
        shadowColor: 'white',
        justifyContent: "center"
    },
    TitleSup: {
        color: backNomeTitleButton,
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
        justifyContent: "flex-end",

    },
    
    

});


export default style;
