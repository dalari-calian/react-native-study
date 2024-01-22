import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//import CompPadrao, { Comp1,Comp2 } from './components/Multi'
//import { Primeiro } from './components/Primeiro'
//import MinMax from './components/MinMax'
//import { Aleatorio } from './components/Aleatorio'
//import Titulo from './components/Titulo'
import Botao from './components/Botao'

export default () => (
    <View style={style.App}>
        <Botao />
        {/*
        <Titulo principal={"Cadastro Produto"} secundario={"Tela de Cadastro de Produto"}/> 
        <MinMax min={3} max="20"/>
        <Aleatorio min={3} max={20}/>
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
        */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
})

/*
function App() {
    const jsx = <Text>Primeiro Componente</Text>
    return jsx
    // return <Text>Primeiro Componente</Text>
}
export default App

// Pode ser feito do jeito acima ou assim
const App = function () {
    const jsx = <Text>Primeiro Componente</Text>
    return jsx
    // return <Text>Primeiro Componente</Text>
}

//Ou pode ser feito do jeito abaixo
export default() => <Text>Primeiro Componente</Text>

// Ou Pode ser feito do jeito abaixo
export function App() {
    return <Text>Novo Componente</Text>
}
*/