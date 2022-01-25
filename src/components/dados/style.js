import { StyleSheet } from "react-native";
import {backCard, backNomeTitleButton, backColor, titleColor, iconColors} from "../../shared/Consts";

const style = () => StyleSheet.create({
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
