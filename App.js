import { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import ProductCard from './components/ProductCard';
import { getProducts } from './services/productService';

export default function App() {
  const [products, setProducts] = useState([])
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    getProducts(limit).then(res => {
      setProducts(res.data.products)
      setFetching(false)
      setLoading(false)
    })
  }, [limit]);

  const handlePress = () => {
    setLoading(true)
    setLimit(limit + 4)
  }

  return (
    <SafeAreaView style={{ flex: 1, minHight: 1000, paddingTop: 50 }}>
      <View>
        {
          fetching ? <Text>Fetching...</Text> :
            <>
              {
                products.length ?
                  <View>
                    <FlatList
                      data={products}
                      renderItem={ProductCard}
                      keyExtractor={(item) => item.id}
                      ListFooterComponent={
                        <Button title={loading ? 'Loading' : 'Load more'} onPress={handlePress} />
                      }
                    />
                  </View>
                  :
                  <Text>No products...</Text>
              }
            </>
        }
      </View>
    </SafeAreaView >
  );
}

