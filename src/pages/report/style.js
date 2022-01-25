import { StyleSheet, StatusBar } from "react-native";
import { backColor } from "../../shared/Consts";


const style = () => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backColor,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
});

export default style;