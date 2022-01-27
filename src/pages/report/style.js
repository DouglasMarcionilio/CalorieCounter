import { StyleSheet, StatusBar, Dimensions } from "react-native";
import {backCard, backNomeTitleButton, backColor, titleColor, iconColors} from "../../shared/Consts";

const {width, height} = Dimensions.get("window");


const style = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backColor,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    menuSup:{
        backgroundColor: titleColor,
        width: '60%',
        height: height * .05,
        borderBottomRightRadius: 100,
        flexDirection: "row",
        alignItems:"center",
    },
    viewIcon: {
        width: '30%',
        alignItems:"center",
        justifyContent: "center",
    },
    TitleMenuSup: {
        color: backNomeTitleButton,
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: "center",
    },
    viewTitle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default style;