import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import style from "./style";
import {backCard, backNomeTitleButton, backColor, titleColor} from "../../shared/Consts";

class SemanaCard extends React.Component{
    render(){
        return (
            <View style={style().semanaCard}>
                        <View style={style().semanaTitleView}>
                            <Text style={style().semanaTitle}>{this.props.titulo}</Text>
                        </View>
                        <View style={{flex: 1}}>
                        <LineChart
                            data={{
                            labels: this.props.label,
                            datasets: [
                                {
                                data: this.props.data
                                }
                            ]
                            }}
                            width={Dimensions.get("window").width * .94} // from react-native
                            height={Dimensions.get("window").height * .27}
                            yAxisLabel=""
                            yAxisSuffix=" Kcal"
                            yAxisInterval={1}
                            chartConfig={{
                            backgroundColor: backCard,
                            backgroundGradientFrom: backCard,
                            backgroundGradientTo: backCard,
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: titleColor
                            }
                            }}
                            bezier
                            style={{
                                borderRadius: 16,
                                paddingLeft: 5,
                            }}
                        />
                        </View>
                        <View style={[style().defictCal, {opacity: this.props.opDados}]}>
                            <View style={{flexDirection:"row", marginRight: 10, alignItems:"center"}}>
                                <Text style={style().stringColors}>
                                    Total:
                                </Text>
                                <Text style={style().valDefictCal}>
                                    4500
                                </Text>
                            </View>
                            <View style={{flexDirection: "row", marginLeft: 10, alignItems:"center"}}>
                                <Text style={style().stringColors}>
                                    Consumido: 
                                </Text>
                                <Text style={style().valDefictCal}>
                                    1500
                                </Text>
                            </View>
                        </View>
                    </View>
        );
    }
}


export default SemanaCard;