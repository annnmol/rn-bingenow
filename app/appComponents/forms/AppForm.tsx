import React from "react";
import { FormProvider } from "react-hook-form";
import { KeyboardAvoidingView } from "react-native";
import { getStyledForms } from "./StyledForms";

const AppForm: React.FC<AppFormProps> = ({
  // onSubmit,
  style,
  methods,
  children,
  ...otherProps
}) => {
  const StyledForms = getStyledForms();
  return (
    <FormProvider {...methods}>
      <KeyboardAvoidingView style={[StyledForms.StyledForm, style && style]}>
        {/* <Form ={methods?.handleSubmit(onSubmit)} {...otherProps}> */}
        {children}
        {/* </Form> */}
      </KeyboardAvoidingView>
    </FormProvider>
  );
};

export default AppForm;
