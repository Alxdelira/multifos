import React from "react";
import { StyleSheet, Image, Dimensions, Text, View, TextInput } from "react-native";

import vaca from '../../assets/vaca.png'

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>
        <Image source={vaca} style={estilos.vaca} />
        <Text style={estilos.titulo}>Multifos</Text>
        <Text style={estilos.titulosecondary}>Nuttrição Animal</Text>
        <View style={estilos.container}>
            <TextInput style={estilos.input}/>
        </View>

    </>
}

const estilos = StyleSheet.create({
    container: {
        position: "absolute"
    },
    vaca: {
        width: '100%',
        height: 640 / 400 * width,
    },
    titulo: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        textAlign: "center",
        fontSize: 100,
        color: "green",
        fontWeight: "bold",

    },
    titulosecondary: {
        position: "absolute"

    },
    input: {
        height: 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "100%"

    }
})