import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import {backCard, backNomeTitleButton, backgroundColor, titleColor, iconColors} from "../../shared/Consts";

class BottomBar extends React.Component{
    
    goProfile = () => {
        this.props.nav.navigate('Profile');
    }

    render(){
        return (
            <View style={style().containerBottomBar}>
                <TouchableOpacity>
                    <Ionicons name="bar-chart-outline" size={32} color={iconColors}/>
                </TouchableOpacity>
                <View style={style().octagon}>
                    <View style={[style().octagonUp, style().octagonBar]} />
                    <View style={[style().octagonFlat, style().octagonBar]} />
                    <View style={[style().octagonLeft, style().octagonBar]} />
                    <View style={[style().octagonRight, style().octagonBar]} />
                    <Ionicons name="add-sharp" size={32} color={'white'} style={{position: "absolute", elevation: 10}}/>
                </View>
                <TouchableOpacity
                    onPress={this.goProfile}
                >
                    <Ionicons name="person-outline" size={32}  color={iconColors}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default BottomBar;
