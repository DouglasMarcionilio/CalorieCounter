import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import style from './style';
import { PieChart } from 'react-native-chart-kit';
import {backCard, backNomeTitleButton, backColor, titleColor} from "../../shared/Consts";

class Cardshoje extends React.Component{
    render(){
        return (
            <View style={style().viewHoje}>
                <View style={style().semanaTitleView}>
                    <Text style={style().semanaTitle}>Hoje</Text>
                </View>
                <PieChart
                    data={[
                          {
                            name: "Consumido",
                            value: 2280,
                            color: titleColor,
                            legendFontColor: "white",
                            legendFontSize: 15,
                          },
                          {
                            name: "Restante",
                            value: 220,
                            color: 'white',
                            legendFontColor: "white",
                            legendFontSize: 15,
                          },
                        ]}
                    width={Dimensions.get("window").width * .952}
                    height={Dimensions.get("window").height * .16}
                    chartConfig={{
                        backgroundGradientFrom: backCard,
                        backgroundGradientTo: backCard,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        strokeWidth: 2,
                        barPercentage: 1,
                        useShadowColorFromDataset: false
                      }}
                    accessor={"value"}
                    backgroundColor={backCard}
                />
                <View style={style().defictCal}>
                    <View style={{flexDirection:"row", marginRight: 10, alignItems:"center"}}>
                        <Text style={style().stringColors}>
                            Consumido:
                        </Text>
                        <Text style={style().valDefictCal}>
                            2280
                        </Text>
                    </View>
                    <View style={{flexDirection: "row", marginLeft: 10, alignItems:"center"}}>
                        <Text style={style().stringColors}>
                            Restante: 
                        </Text>
                        <Text style={style().valDefictCal}>
                            220
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Cardshoje;
