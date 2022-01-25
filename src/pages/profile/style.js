import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { backgroundColor } from "../../shared/Consts";
import {backCard, backNomeTitleButton, backColor, titleColor, iconColors} from "../../shared/Consts";

const {width, height} = Dimensions.get("window");

const style = () => StyleSheet.create({
    container: {
        backgroundColor: backColor,
        flex: 1,
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

    //Dados View
    DadosView: {
        borderBottomWidth: 1,
        borderBottomColor: titleColor,
        width: '94%',
        alignSelf: "center",
        flexDirection: "row",
    },
    dadosTitle: {
        color: titleColor,
        marginTop: 15,
        fontWeight: "bold",
    },
    dadosTotView: {
        width: '94%',
        alignSelf: "center",
        marginTop: 15,
    },
    nomeDados: {
        color: 'white',
        fontWeight: "bold"
    },
    dadosDados: {
        color: '#9D9D9D',
    },
    rowDados: {
        flexDirection: "row",
        marginTop: 5,
    },
    viewDadosNome: {
        flex: 1,
    }

});

export default style;
