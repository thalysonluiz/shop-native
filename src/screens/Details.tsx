import { Platform } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Heading, Image, ScrollView, Text, VStack, useToast, HStack, Toast, ToastTitle, ToastDescription } from '@gluestack-ui/themed';

import { useCart } from '../hooks/useCart';

import { PRODUCTS } from '../data/products';
import { Sizes } from '../components/Sizes';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { ScreenHeader } from '../components/ScreenHeader';
import { ProductCardProps } from '../components/ProductCard';

type RouteParamsProps = {
  productId: string;
}

export function Details() {
  const [size, setSize] = useState('35');
  const [quantity, setQuantity] = useState('1');
  const [product, setProduct] = useState<ProductCardProps>({} as ProductCardProps);

  const toast = useToast();
  const route = useRoute();
  const { navigate } = useNavigation();
  const { addProductCart } = useCart();

  const { productId } = route.params as RouteParamsProps;

  async function handleAddProductToCart() {
    try {
      await addProductCart({
        id: product.id,
        name: product.name,
        image: product.thumb,
        quantity: Number(quantity),
        size: product.size
      });

      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Toast action="success" variant="solid" bgColor='$green500' mt={'$10'}>
                <ToastTitle color='$white' w={'$full'}>Produto adicionado no carrinho</ToastTitle>
            </Toast>
          )
        }
      });

      navigate('cart');
    } catch (error) {
      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Toast action="attention" variant="solid" bgColor='$red500' mt={'$10'}>
                <ToastTitle>Não foi possível adicionar o produto no carrinho</ToastTitle>
            </Toast>
          )
        }
      });
    }
  }

  useEffect(() => {
    const selected = PRODUCTS.filter(item => item.id === productId)[0] as ProductCardProps;
    setProduct(selected);
  }, [productId]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Detalhes do Produto" />

      <ScrollView>
      {product.image ? <Image
          key={String(new Date().getTime())}
          source={product.image}
          w={'$56'}
          h={'$56'}
          resizeMode={Platform.OS === "android" ? "contain" : "cover"}
          alt="Imagem do produto"
          alignSelf="center"
        /> : <></>}

        <VStack p={'$6'}>
          <HStack w="$full" justifyContent="space-between" alignItems="center">
            <VStack>
              <Heading color="white" fontFamily="$heading" fontSize="$xl">
                {product.name}
              </Heading>

              <Text color="$gray200" fontSize="$md" fontFamily="$heading">
                R$ {product.price}
              </Text>
            </VStack>

            <VStack alignItems="flex-end">
              <Text color="$gray200" fontSize="$sm" textAlign="justify" pt={'$2'}>
                Quantidade
              </Text>

              <Input
                onChangeText={setQuantity}
                keyboardType="numeric"
                textAlign="center"
                value={quantity}
                w={'$14'}
              />
            </VStack>
          </HStack>

          <Text color="$gray200" fontSize="$md" textAlign="justify" pt={'$2'}>
            {product.description}
          </Text>

          <Sizes onSelect={setSize} selected={size} />

          <Button title="Adicionar no carrinho" onPress={handleAddProductToCart} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
