import react from "react";
import { View, Text } from "react-native";
import style from "./style";
import SemanaCard from "../../components/home/semanaCard";
import NomeDados from "../../components/home/nomeDados";
import Cardshoje from "../../components/home/cardsHoje";
import BottomBar from "../../components/home/bottomBar";
import CardExercicio from "../../components/home/cardExercicio";

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
                        <CardExercicio />
                        <Cardshoje />
                        <SemanaCard />
                    </View>
                    <View style={style().viewBottom}>
                        <BottomBar nav={this.props.navigation}/>
                    </View>
                </View>
            
        );
    }
}

export default Home;
