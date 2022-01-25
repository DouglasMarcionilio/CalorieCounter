import React from 'react';
import { View, Text } from 'react-native';
import style from './style';

class NomeDados extends React.Component{
    render(){
        return (
            <View style={style().viewNome}>
                        <Text style={style().nome}>Douglas Marcionilio Ferreira Aguiar</Text>
                        <View style={style().viewPesoAlt}>
                            <View>
                                <Text style={style().pesoAltTitle}>Peso</Text>
                                <Text style={style().pesoAltData}>89.5 Kg</Text>
                            </View>
                            <View>
                                <Text style={style().pesoAltTitle}>Altura</Text>
                                <Text style={style().pesoAltData}>173 Cm</Text>
                            </View>
                        </View>
                    </View>
        );
    }
}

export default NomeDados;
