import React from "react";
import Estilo from "./estilo";
import { Text } from "react-native";

export function Aleatorio(props) {
    const min = Math.ceil(props.min)
    const max = Math.floor(props.max)
    const random = Math.floor(Math.random() * (max-min) + min)
    return (
        <Text style={Estilo.txtG}>
            A random number: {random}
        </Text>
    )
}