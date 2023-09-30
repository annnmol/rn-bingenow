interface AppFormProps {
  onSubmit?: (data: FormData) => void;
  methods: UseFormReturn<unknown, unknown>;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  [otherProps: string]: any;
}

interface TextFieldProps {
  name: string;
  control: Control<unknown>;
  label?: string;
  divStyle?: StyleProp<TextStyle>;
  onChangeCallbackFn?: (value: unknown) => void;
  [otherProps: string]: any;
}

interface SelectFieldProps extends TextFieldProps {
  options: unknown[];
}
interface RadioFieldProps extends TextFieldProps {
  options: unknown[];
  row?: boolean;
}

interface AppFormErrorProps extends React.ComponentProps<typeof Text> {
  error: string | undefined;
  visible: boolean | undefined;
  divStyle?: StyleProp<TextStyle>;
  [otherProps: string]: any;
}
interface AppFormLabelProps extends React.ComponentProps<typeof Text> {
  label: string | undefined | null;
  divStyle?: StyleProp<TextStyle>;
  [otherProps: string]: any;
}

interface FormButtonProps extends React.ComponentProps<typeof TouchableOpacity> {
  handleSubmit:any;

  textStyle?: StyleProp<any>;
  variant?: "outline" | "primary" | "text";
  textVariant?: "button1" | "button2" | "button3";
  style?: StyleProp<ViewStyle>;
  subText?: string;
  children: React.ReactNode;
  [otherProps: string]: any;
}
