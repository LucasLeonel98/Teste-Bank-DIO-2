import { ChakraProvider, Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface IButton {
    label: string,
    color: string,
    width_button: string,
    trigger: MouseEventHandler
}

export const ButtonComp = ({ label, color, trigger, width_button }: IButton) => {
    return (
        <ChakraProvider>
            <Button onClick={trigger} colorScheme={color} width={width_button} >{label}</Button>
        </ChakraProvider>
    );
}