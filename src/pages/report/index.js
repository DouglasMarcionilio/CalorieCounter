import React from "react";
import { View, Text } from "react-native";
import style from "./style";

class Report extends React.Component{
    render(){
        return (
            <View style={style().container}>
                <Text style={{color: 'white'}}>Report</Text>
            </View>
        );
    }
}

export default Report;
