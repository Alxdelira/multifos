import React from "react";
import { StyleSheet, Image, Dimensions, Text, View, TextInput } from "react-native";

import vaca from '../../assets/vaca.png'

const width = Dimensions.get('screen').width;

export default function Login() {
    return <>
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Multifos</Text>
            <Text style={estilos.titulosecondary}>Nuttrição Animal</Text>
            <Text style={estilos.user}>Usuario</Text>
            <TextInput style={estilos.input} />
        </View>
        <Image source={vaca} style={estilos.vaca} />
    </>
}

const estilos = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center"

    },
    vaca: {
        width: '100%',
        height: 640 / 400 * width,
    },
    titulo: {
        fontSize: 75,
        color: "green",
        fontWeight: "bold",

    },
    titulosecondary: {

    },
    user: {

    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 400

    }
})