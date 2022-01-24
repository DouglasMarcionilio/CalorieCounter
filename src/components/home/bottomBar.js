import React from "react";
import { View, Text } from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';

class BottomBar extends React.Component{
    
    render(){
        return (
            <View style={style().containerBottomBar}>
                <View>
                    <Ionicons name="bar-chart-outline" size={32} />
                </View>
                <View style={style().octagon}>
                    <View style={[style().octagonUp, style().octagonBar]} />
                    <View style={[style().octagonFlat, style().octagonBar]} />
                    <View style={[style().octagonLeft, style().octagonBar]} />
                    <View style={[style().octagonRight, style().octagonBar]} />
                </View>
                <View>
                    <Ionicons name="person-outline" size={32} />
                </View>
            </View>
        );
    }
}

export default BottomBar;
