import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import style from './style';

class Periodo extends React.Component{
    render(){
        return (
            <View style={style().containerPeriodo}>
                    <View style={style().containerTituloPeriodo}>
                        <Text style={style().tituloPeriodo}>Periodo de busca</Text>
                    </View>
                    <View style={style().viewRowBtn}>
                        <TouchableOpacity 
                            style={style().btnPeriodo}
                        >
                            <Text style={style().titleBtn}>Data inicial</Text>
                        </TouchableOpacity>
                        <Text style={style().tituloPeriodo}>A</Text>
                        <TouchableOpacity 
                            style={style().btnPeriodo}
                        >
                            <Text style={style().titleBtn}>Data final</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
        );
    }
}

export default Periodo;
