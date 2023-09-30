import React from "react";
import { useFormContext } from "react-hook-form";
import {
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";
import AppText from "./AppText";
import { getStyledForms } from "./StyledForms";

const AppFormSubmitButton: React.FC<FormButtonProps> = ({
  handleSubmit,
  style,
  textStyle,
  variant = "primary",
  textVariant = "button1",
  children,
  subText,
  ...otherProps
}) => {
  const StyledForms = getStyledForms();

  const {
    watch,
    trigger,
    formState: {
      errors,
      isLoading,
      isSubmitting,
      isValid,
    },
  } = useFormContext();

  let isDisabled = isSubmitting || isLoading;

  const handleErrorToast = () => {
    ToastAndroid.show("Fill the required fileds.", ToastAndroid.SHORT);
    console.warn("errors", errors);
  };

  const handlePress = () => {
    trigger();
    isValid ? handleSubmit() : handleErrorToast();
  };
  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      activeOpacity={0.9}
      disabled={isDisabled}
      style={[
        isSubmitting ? StyledForms.disabledSubmitBtn : StyledForms.submitBtn,
        style && style
      ]}
      {...otherProps}
    >
      {isSubmitting ? (
        <ActivityIndicator color={"blue"} />
      ) : (
        <>
          <AppText
            style={[StyledForms.submitBtnText, textStyle]}
            variant={textVariant}
          >
            {children}
          </AppText>
          {subText && (
            <AppText
              variant={"body3"}
              style={[StyledForms.submitBtnText, { lineHeight: 14 }]}
            >
              {subText}
            </AppText>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default AppFormSubmitButton;

{
  /* <AppButton
onPress={() => {
  trigger();
  isValid ? handleSubmit(watch()) : handleErrorToast();
}}
disabled={isDisabled}
// underlayColor={"transparent"}
style={style}
// {...otherProps}
>
{children}
</AppButton> */
}
