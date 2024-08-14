import { Feather } from '@expo/vector-icons';
import { Heading, HStack, Icon, Text, VStack, Avatar, AvatarImage, ChevronsRightIcon } from "@gluestack-ui/themed";

import userPhotoDefault from "../assets/userPhotoDefault.png";

export function HomeHeader() {
  return (
    <HStack pt={'$16'} pb={'$5'} px={'$8'} bg="$gray600" alignItems="center">
      <Avatar

        size={'md'}
        mr={4}
        borderWidth={2}
        borderColor="$gray400"
      >
        <AvatarImage 
          source={userPhotoDefault}
          alt='Foto de uma pessoa'
        />
      </Avatar>

      <VStack flex={1}>
        <Text color="$gray100" fontSize="$md">
          Olá,
        </Text>

        <Heading color="$gray100" fontSize="$md" fontFamily="$heading">
          Rodrigo Gonçalves
        </Heading>
      </VStack>

      <Icon
        as={ChevronsRightIcon}
        color="$gray200"
        size={'sm'}
      />
    </HStack>
  );
}