import { HeaderList } from './HeaderList';
import { FlatList, Toast, ToastTitle, VStack, useToast } from '@gluestack-ui/themed';

import { useCart } from '../hooks/useCart';

import { ItemCartCard } from './ItemCartCard';
import { Button } from '../components/Button';

export function ItemsCart() {
  const { cart, removeProductCart } = useCart();
  const toast = useToast();

  async function handleItemRemove(productId: string) {
    try {
      await removeProductCart(productId);

      toast.show({
        placement: 'top',
        render: () => {
          return (
            <Toast action="success" variant="solid" bgColor='$green500' mt={'$10'}>
                <ToastTitle>Produto removido</ToastTitle>
            </Toast>
          )
        }
      });

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

  return (
    <VStack flex={1}>
      <HeaderList title="Produtos" counter={cart.length} />

      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ItemCartCard
            data={item}
            onRemove={() => handleItemRemove(item.id)}
          />
        )}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        px={'$8'}
        mt={'$2'}
      />

      {
        cart.length > 0 &&
        <Button
          title="Finalizar compra"
          mx={'$8'}
          my={'$3'}
        />
      }
    </VStack>
  );
}