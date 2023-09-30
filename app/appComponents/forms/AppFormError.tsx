import React from "react";
import { Text } from "react-native";
import { getStyledForms } from "./StyledForms";
import AppText from "./AppText";

const AppFormError: React.FC<AppFormErrorProps> = ({
  error,
  visible = false,
  divStyle,
  ...otherProps
}) => {

  const StyledForms = getStyledForms();


  if (!visible || !error || typeof error !== "string") return null;

  return (
    <AppText style={[StyledForms.errorText, divStyle && divStyle]} variant="body2" {...otherProps} >{error}</AppText>
  );
};

export default AppFormError;