import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import style from "./style";
import CalendarPicker from "react-native-calendar-picker";
import Periodo from "../../components/report/periodo";


class Report extends React.Component{
    render(){
        return (
            <View style={style().container}>
                <View style={style().menuSup}>
                    <View style={style().viewIcon}>
                        <TouchableOpacity
                            onPress={this.backHome}
                        >
                            <Ionicons name="arrow-back-outline" size={32} />        
                        </TouchableOpacity>
                    </View>
                    <View style={style().viewTitle}>
                        <Text style={style().TitleMenuSup}>Relatório</Text>
                    </View>
                </View>
                <Periodo />
            </View>
        );
    }
}

export default Report;
