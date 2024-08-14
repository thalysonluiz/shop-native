import { FlatList } from '@gluestack-ui/themed';

import { Brand } from './Brand';
import { BRANDS } from '../data/brands';

type Props = {
  onSelect: (value: string) => void;
  selected: string;
}

export function Brands({ onSelect, selected }: Props) {

  return (
    <FlatList
      data={BRANDS}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Brand
          image={item.image}
          isActive={selected === item.name}
          onPress={() => onSelect(item.name)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 8 }}
      mt={'$10'}
      maxHeight={'$10'}
      minHeight={'$10'}
    />
  );
}