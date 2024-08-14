import { ComponentProps } from 'react';
import { InputField, Input as NativeBaseInput } from '@gluestack-ui/themed';

type IInputProps = ComponentProps<typeof InputField>;

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="$gray800"
      h={'$14'}
      px={'$4'}
      borderColor="$gray600"
      $focus={{
        bg: "$gray800",
        borderColor: "$gray600"
      }}
      
    >
      <InputField 
        fontSize="$md"
        fontFamily="$body"
        color="$white"
        placeholderTextColor="$gray300" 
        {...rest}
      />
    </NativeBaseInput>
  );
}