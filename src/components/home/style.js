import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window");

const style = () => StyleSheet.create({
    
    // Estilo do card da semana
    semanaCard: {
        width: '95%',
        height: height * .33,
        borderRadius: 15,
        elevation: 10,
        backgroundColor: 'white',
        marginTop: 7,
        alignSelf: "center",
        backgroundColor: '#384FE8'
    },
    semanaTitleView: {
        height: height * .03,
        width: '80%',
        borderBottomRightRadius: 150,
        backgroundColor: '#624BFF',
        elevation: 10,
        justifyContent: "center",
        borderTopLeftRadius: 100,
    },
    semanaTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: "center",
    },
    defictCal: {
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems:"center",
        width: '100%',
        alignSelf:"center",
        marginBottom: 7,
    },
    valDefictCal: {
        color: 'white',
    },

    // Estilo do Nome e dos dados inferiores
    viewNome: {
        width: '100%',
        height: '10%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    nome: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    viewPesoAlt: {
        width: '40%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    pesoAltTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: "center",
        marginTop: 7
    },
    pesoAltData: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: "center",
    },

    //Estilo card hoje
    viewHoje:{
        width: '95%',
        height: height * .23,
        elevation: 10,
        backgroundColor: '#384FE8',
        alignSelf: "center",
        borderRadius: 15,
    },

    //Estilo Bottom bar
    containerBottomBar: {
        flexDirection: "row",
        width: '100%',
        height: '100%',
        justifyContent: "space-around",
        alignItems: "center",
    },
    octagon: {
        justifyContent: "center",
        alignItems: "center",
    },
    octagonBar: {
        width: 61,
        height: 24,
        backgroundColor: "#624BFF",
        elevation: 5
    },
    octagonUp: {},
    octagonFlat: {
        position: "absolute",
        top: 0,
        left: 0,
        transform: [{ rotate: "90deg" }],
    },
    octagonLeft: {
        position: "absolute",
        top: 0,
        left: 0,
        transform: [{ rotate: "-45deg" }],
    },
    octagonRight: {
        position: "absolute",
        top: 0,
        left: 0,
        transform: [{ rotate: "45deg" }],
    },    
});

export default style;