import { RoundIconButton, RoundIconButtonProps, useTheme } from "@drincs/react-components";
import { motion } from "motion/react";

interface NavigationRoundIconButtonProps extends RoundIconButtonProps {
    selected?: boolean;
}

export default function NavigationRoundIconButton(props: NavigationRoundIconButtonProps) {
    const {
        selected,
        sx,
        ...rest
    } = props;

    return (
        <RoundIconButton
            circumference={{ xs: "3rem", sm: "3.5rem", md: "4rem", lg: "5rem", xl: "7rem" }}
            sx={{
                border: 3,
                borderColor: selected ? useTheme().palette.primary[800] : useTheme().palette.background.body,
                ...sx
            }}
            elevation="lg"
            component={motion.div}
            initial={{
                scale: 0
            }}
            animate={{
                scale: 1,
            }}
            exit={{
                scale: 0
            }}
            transition={{ ease: "easeOut" }}
            {...rest}
        />
    );
}
