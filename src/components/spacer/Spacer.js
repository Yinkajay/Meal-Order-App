import React from "react";
import { View } from "react-native";
import { useTheme } from "styled-components";
import styled from "styled-components/native";

const TopSmall = styled.View`
margin-top: ${props => props.theme.space[1]};
`

const TopMedium = styled.View`
margin-top: ${props => props.theme.space[2]};
`;
const TopLarge = styled.View`
margin-top: ${props => props.theme.space[3]};
`;
const LeftSmall = styled.View`
margin-left: ${props => props.theme.space[1]};
`;
const LeftMedium = styled.View`
margin-left: ${props => props.theme.space[2]};
`;
const LeftLarge = styled.View`
margin-left: ${props => props.theme.space[3]};
`;

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
}

const positionVariant = {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
    bottom: "marginBottom"
}

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size]
    const property = positionVariant[position]
    const value = theme.space[sizeIndex]
    return `${property}:${value}`
}

const SpacerView = styled.View`
${({ variant }) => variant}
`

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme()
    const variant = getVariant(position, size, theme)
    return (
        <SpacerView variant={variant}>
            {children}
        </SpacerView>
    )
}

// export const Spacer = styled.View`
// ${({ position, size, theme }) => getVariant(position, size, theme)}
// `
Spacer.defaultProps = {
    position: "top",
    size: "small"
}