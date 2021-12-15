import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import styles from '../ToggleText/styles'

interface ToogleProps {
    text: string
    toggle: any
    setToggle: any
}

const ToogleText = (props: ToogleProps) => {
    return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text1}>{props.text}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text>{!props.toggle ? 'Inactive' : 'Active'}</Text>

                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor="white"
                        value={props.toggle}
                        onValueChange={(value) => { props.setToggle(value) }}
                    />
                </View>
            </View>
    )
}

export default ToogleText;