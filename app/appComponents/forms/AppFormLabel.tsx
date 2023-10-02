import React from "react";
import { Text } from "react-native";
import { getStyledForms } from "./StyledForms";
import AppText from "./AppText";

const AppFormLabel: React.FC<AppFormLabelProps> = ({ label, labelStyle,...otherProps }) => {
  const StyledForms = getStyledForms();

  if(!label) return null;

  return (
    <AppText
      style={[StyledForms.labelText, labelStyle && labelStyle]}
      variant="H5"
      {...otherProps}
    >
      {label}
    </AppText>
  );
};

export default AppFormLabel;
