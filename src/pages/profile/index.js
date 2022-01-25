import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";
import { Ionicons } from '@expo/vector-icons';
import {Divider} from 'react-native-elements';
import {backCard, backNomeTitleButton, backColor, titleColor, iconColors} from "../../shared/Consts";
import DadosView from "../../components/dados/dadosView";
import SemanaCard from "../../components/home/semanaCard";

class Profile extends React.Component{

    backHome = () => {
        this.props.navigation.goBack();
    }
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
                        <Text style={style().TitleMenuSup}>Perfil</Text>
                    </View>
                </View>
                    <DadosView />
                    <View style={{marginTop: 15}}>
                        <SemanaCard 
                            titulo={'Evolução de peso'}
                            label={['21/07', '28/07', '04/08']}
                            data={[95.1,90.2,87.5]}
                            opDados={0}
                        />
                    </View>
                    
            </View>
        );
    }
}

export default Profile;
