import { ComponentProps } from 'react';
import { Pressable, Text } from '@gluestack-ui/themed';

type IPressableProps = ComponentProps<typeof Pressable>;

type Props = IPressableProps & {
  size: string;
  isActive: boolean;
}

export function Size({ size, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr={'$3'}
      w={'$10'}
      h={'$10'}
      bg="$gray600"
      rounded="$xs"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"      
      borderWidth={isActive ? '$1' : "$0"}
      borderColor={isActive ? "$green500" : ''}
      {...rest}
    >
      <Text color={isActive ? "$green500" : "$gray200"} fontSize="$xs">
        {size}
      </Text>
    </Pressable>
  );
}