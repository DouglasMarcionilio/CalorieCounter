import react from "react";
import { View, Text } from "react-native";
import style from "./style";
import SemanaCard from "../../components/home/semanaCard";
import NomeDados from "../../components/home/nomeDados";
import Cardshoje from "../../components/home/cardsHoje";

class Home extends react.Component{
    render(){
        return (
                <View style={style().container}>
                    <View style={style().supMenu}>
                        <Text style={style().TitleSup}>
                            DashBoard
                        </Text>
                    </View>
                    <View style={style().principalView}>
                        <NomeDados />
                        <Cardshoje />
                        <SemanaCard />
                    </View>
                    <View style={style().viewBottom}>
                        
                    </View>
                </View>
            
        );
    }
}

export default Home;
