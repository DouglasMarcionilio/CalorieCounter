import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import style from './style';
import { PieChart } from 'react-native-chart-kit';

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
                            name: "Gasto",
                            value: 2280,
                            color: "#F00",
                            legendFontColor: "white",
                            legendFontSize: 15,
                          },
                          {
                            name: "Meta",
                            value: 2500,
                            color: "green",
                            legendFontColor: "white",
                            legendFontSize: 15,
                          },
                        ]}
                    width={Dimensions.get("window").width * .952}
                    height={Dimensions.get("window").height * .16}
                    chartConfig={{
                        backgroundGradientFrom: "#384FE8",
                        backgroundGradientTo: "#384FE8",
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        strokeWidth: 2,
                        barPercentage: 1,
                        useShadowColorFromDataset: false
                      }}
                    accessor={"value"}
                    backgroundColor={"#384FE8"}
                />
                <View style={style().defictCal}>
                    <View style={{flexDirection:"row", marginRight: 10, alignItems:"center"}}>
                        <Text style={style().semanaTitle}>
                            Meta:
                        </Text>
                        <Text style={style().valDefictCal}>
                            4500
                        </Text>
                    </View>
                    <View style={{flexDirection: "row", marginLeft: 10, alignItems:"center"}}>
                        <Text style={style().semanaTitle}>
                            Gasto: 
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

export default Cardshoje;
