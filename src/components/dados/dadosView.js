import React from "react";
import { View, Text } from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import {titleColor, iconColors} from "../../shared/Consts";

class DadosView extends React.Component{
    render(){
        return (
            <View>
                <View  style={style().DadosView}>
                        <View style={{flex: 1}}>
                            <Text style={style().dadosTitle}>Dados</Text>
                        </View>
                        <View style={{justifyContent: "flex-end"}}>
                            <Ionicons name="create-outline" size={25} color={titleColor}/>
                        </View>
                    </View>
                    <View style={style().dadosTotView}>
                        <Text style={style().nomeDados}>Nome</Text>
                        <Text style={style().dadosDados}>Douglas Marcionilio Ferreira Aguiar</Text>
                        <View  style={style().rowDados}>
                            <View style={style().viewDadosNome}>
                                <Text style={style().nomeDados}>Idade</Text>
                                <Text style={style().dadosDados}>24</Text>
                            </View>
                            <View style={style().viewDadosNome}>
                                <Text style={style().nomeDados}>Sexo</Text>
                                <Text style={style().dadosDados}>M</Text>
                            </View>
                            <View style={style().viewDadosNome}>
                                <Text style={style().nomeDados}>Peso</Text>
                                <Text style={style().dadosDados}>89,5 Kg</Text>
                            </View>
                            <View style={style().viewDadosNome}>
                                <Text style={style().nomeDados}>Altura</Text>
                                <Text style={style().dadosDados}>173 cm</Text>
                            </View>
                        </View>
                        <View  style={style().rowDados}>
                            <View style={style().viewDadosNome}>
                                <Text style={style().nomeDados}>Ultima pesagem</Text>
                                <Text style={style().dadosDados}>24/01/2022</Text>
                            </View>
                        </View>
                    </View>
            </View>
        );
    }
}

export default DadosView;
