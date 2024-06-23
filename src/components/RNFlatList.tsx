import React from 'react';
import { FlatList } from 'react-native';

interface RNFlatListProps<T> {
  data: T[];
  renderItem: ({ item }: { item: T }) => JSX.Element;
  keyExtractor: (item: T) => string;
  ListHeaderComponent?: () => JSX.Element | null;
  ListFooterComponent?: () => JSX.Element | null;
  ListEmptyComponent?: () => JSX.Element | null;
}

const RNFlatList = <T,>({ data, renderItem, keyExtractor, ListHeaderComponent, ListFooterComponent, ListEmptyComponent }: RNFlatListProps<T>) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default RNFlatList;
