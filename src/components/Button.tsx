import { ComponentProps } from 'react';
import { Button as ButtonNativeBase, Text } from '@gluestack-ui/themed';

type IButtonProps = ComponentProps<typeof ButtonNativeBase>;

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      flex={1}
      minHeight={'$14'}
      maxHeight={'$14'}
      bg="$green700"
      borderWidth={0}
      borderColor="$green500"
      rounded="$sm"
      $pressed-backgroundColor="$green500"
      {...rest}
    >
      <Text
        color="$white"
        fontFamily="$heading"
        fontSize="$sm"
      >
        {title}
      </Text>
    </ButtonNativeBase >
  );
}