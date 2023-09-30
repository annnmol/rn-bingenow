import React from "react";
import { Text } from "react-native";
import { getStyledForms } from "./StyledForms";
import AppText from "./AppText";

const AppFormLabel: React.FC<AppFormLabelProps> = ({ label, divStyle,...otherProps }) => {
  const StyledForms = getStyledForms();

  return (
    <AppText
      style={[StyledForms.labelText, divStyle && divStyle]}
      variant="button3"
      {...otherProps}
    >
      {label}
    </AppText>
  );
};

export default AppFormLabel;
