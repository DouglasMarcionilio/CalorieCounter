import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

class DefictCard extends React.Component{
    render(){
        return (
            <View style={style().containerDefict}>
                <Text>Ola</Text>
            </View>
        );
    }
}

export default DefictCard;