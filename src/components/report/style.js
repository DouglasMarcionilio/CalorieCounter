import { StyleSheet, Dimensions } from "react-native";
import {backCard, backNomeTitleButton, backColor, titleColor, iconColors} from "../../shared/Consts";

const {width, height} = Dimensions.get("window");


const style = () => StyleSheet.create({
    containerPeriodo: {
        width: '100%',
        marginTop: 15,
    },
    containerTituloPeriodo: {
        width: '96%',
        borderBottomColor: titleColor,
        borderBottomWidth: 1,
        alignSelf: "center",
    },
    tituloPeriodo: {
        color: titleColor,
        marginBottom: 2,
        fontWeight: "bold",
    },
    btnPeriodo: {
        width: width / 3,
        height: height * .05,
        backgroundColor: titleColor,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    viewRowBtn: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 15,
    },
    titleBtn:{
        color: backNomeTitleButton,
        fontWeight: "bold",
    }
});

export default style;
