import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, Box, Heading, HStack, Icon } from '@gluestack-ui/themed';
import { Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Props = {
  title: string;
}

export function ScreenHeader({ title }: Props) {
  const { goBack } = useNavigation();

  return (
    <HStack bg="$gray600" pb={'$6'} pt={'$16'} justifyContent="space-between" px={'$6'}>
      <Pressable onPress={goBack}>
      <Icon
        as={ArrowLeftIcon}
        color="$green500"
        size={'xl'}
      />
      </Pressable>


      <Heading color="$gray100" fontSize="$xl">
        {title}
      </Heading>

      <Box w={'$6'} h={'$6'} />
    </HStack>
  );
}