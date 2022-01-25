import React from "react";
import { View, Text } from "react-native";
import style from "./style";

class CardExercicio extends React.Component{
    render(){
        return(
            <View style={style().viewExercicio}>
                <View style={style().semanaTitleView}>
                    <Text style={style().semanaTitle}>Tempo de exercicio</Text>
                </View>
                <View style={style().viewRowExercicio}>
                    <View>
                        <Text style={style().stringColors}>Hoje</Text>
                        <Text style={style().subtitleExercicio}>1h 20m</Text>
                    </View>
                    <View>
                        <Text style={style().stringColors}>Semana</Text>
                        <Text style={style().subtitleExercicio}>8h 57m</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default CardExercicio;
