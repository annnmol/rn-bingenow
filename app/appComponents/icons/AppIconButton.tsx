import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { getStyledForms } from "../forms/StyledForms";


interface Props extends React.ComponentProps<typeof TouchableOpacity> {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  [otherProps: string]: unknown;
  onPress: (event: GestureResponderEvent) => void;
}

const AppIconButton: React.FC<Props> = ({ onPress, style, children }) => {
  const StyledForms = getStyledForms();


  return (
    <TouchableOpacity
      style={[StyledForms.styledIconButton, style && style]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default AppIconButton;


