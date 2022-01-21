import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = (o: any) => StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    Activity: {
        marginTop: 300
    },
    mainContainer: {
        padding: 10,
        margin: 4
    },
    text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: 'teal',
        marginTop: 5,
        marginBottom: 15,
    },
    image: {
        width: o.isLandscape ? o.width * 0.91 : o.width * 0.93,
        height: o.isLandscape ? o.height * 0.4 : o.height * 0.25,
    },
    button: {
        backgroundColor: 'teal',
        width: o.isLandscape ? o.width * 0.91 : o.width * 0.93,
        height: o.isLandscape ? o.height * 0.14 : o.height * 0.065,
        justifyContent: 'center',
        marginVertical: 15
    },
    text2: {
        fontSize: 39,
        color: 'teal',
        paddingTop: 15,
        width: o.isLandscape ? o.width * 0.91 : o.width * 0.93,
    },

    progressbar: {
        marginVertical: 15,
        width: o.isLandscape ? o.width * 0.91 : o.width * 0.93,
        height: o.isLandscape ? o.height * 0.015 : o.height * 0.005,
    },
    text3: {
        fontSize: 21,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    }
});

export default styles;