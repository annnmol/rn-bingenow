import React from "react";
import { Controller } from "react-hook-form";
import {
  Text,
  View
} from "react-native";

import Checkbox from "expo-checkbox";
import AppFormError from "./AppFormError";
import AppFormLabel from "./AppFormLabel";
import { getStyledForms } from "./StyledForms";
import AppText from "./AppText";


interface Props extends TextFieldProps {
  text: string;
}

const AppFormCheckboxField: React.FC<Props> = ({
  name,
  label,
  divStyle,
  control,
  text,
  onChangeCallbackFn,
  ...otherProps
}) => {
  const StyledForms = getStyledForms();


  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error, isTouched, invalid },
      }) => (
        <View style={[StyledForms.formControl, divStyle && divStyle]}>
          <AppFormLabel label={label} />
          <View style={{ flexDirection: "row", alignItems: "flex-start",gap: 10 }}>
            <Checkbox
              value={value}
              onValueChange={(e: boolean) => {
                onChange(e);
                if (onChangeCallbackFn) onChangeCallbackFn(e);
              }}
              style={{marginTop:4,}}
              {...otherProps}
            />
            <AppText variant="body3" style={{ width:"90%"}}>{text}</AppText>
          </View>

          <AppFormError
            visible={error && invalid}
            error={error?.message as string}
          />
        </View>
      )}
    />
  );
};

export default AppFormCheckboxField;
