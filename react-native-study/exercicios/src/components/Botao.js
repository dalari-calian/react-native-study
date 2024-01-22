import React from "react";
import { Alert, Button } from "react-native";

export default props => {
    
    function executar() {
        console.warn('Exec #01!')
    }
    
    return (
        <>
            <Button 
                title="Executar #1!"
                onPress={executar}
            />
            <Button 
                title="Executar #2!"
                onPress={() => {console.warn('Exec #02!')}}
            />
            <Button 
                title="Executar #2!"
                onPress={function() {
                    console.warn('Exec #03!')
                }}
            />
        </>
    )
}