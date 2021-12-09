import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { ProgressBar, Colors } from 'react-native-paper';

interface RenderItemProps {
    item: any
    o: any

}

const RenderItem = (props: RenderItemProps) => {
    const { item, o } = props;
    return (
        <ScrollView>
            <View style={styles(o).mainContainer}>
                <Text style={styles(o).text}>Your Courses</Text>

                <Image source={{ uri: item.url }} style={styles(o).image} />

                <Text style={styles(o).text2}>{item.title}</Text>

                <ProgressBar progress={1} color={Colors.green800} style={styles(o).progressbar} />

                <TouchableOpacity style={styles(o).button}>
                    <Text style={styles(o).text3}>Continue Learning</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default RenderItem;