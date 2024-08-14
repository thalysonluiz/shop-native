import { ComponentProps } from 'react';
import { ImageSourcePropType, Platform } from 'react-native';
import { Pressable, Image } from '@gluestack-ui/themed';

type PressableProps = ComponentProps<typeof Pressable>;

type Props = PressableProps & {
  image: ImageSourcePropType;
  isActive: boolean;
}

export function Brand({ image, isActive, ...rest }: Props) {
  return (
    <Pressable
      mr={'$3'}
      w={'$24'}
      h={'$10'}
      bg={isActive ? "$green500" : "$gray600"}
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      borderWidth={isActive ? '$1' : "$0"}
      borderColor={isActive ? "$green500" : ''}
      {...rest}
    >
      <Image
        source={image}
        alt="Brand image"
        w={'$20'}
        h={'$7'}
        resizeMode={Platform.OS === "android" ? "contain" : "cover"}
      />
    </Pressable>
  );
}