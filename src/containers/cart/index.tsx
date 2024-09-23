import { useMemo } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

// Files
import CustomHeader from "@/components/CustomHeader";
import { useCartStore } from "@/store/useCartStore";
import useGetCategories from "../home/hooks/useGetCategories";
import Product from "@/components/Product";
import { Post } from "@/services/posts.service";
import { LucideDelete } from "@/lib/icons/Delete";
import { Text } from "@/components/ui/text";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const reset = useCartStore((state) => state.reset);

  const { data: products } = useGetCategories();

  // Create a mapping of products for quick lookup
  const productMap = products?.reduce((map, product) => {
    map[product.id] = product;
    return map;
  }, {} as Record<number, Post>);

  const cartItemsWithDetails = useMemo(() => {
    return cart.map((cartItem) => productMap[cartItem.productId]);
  }, [cart]);

  return (
    <View className="p-4 flex-1">
      <CustomHeader
        RightIcon={() => (
          <TouchableOpacity onPress={reset}>
            <LucideDelete className="mr-2 text-destructive" size={20} />
          </TouchableOpacity>
        )}
        title="Cart"
        className="mb-10"
      />
      <FlatList
        ListEmptyComponent={() => <Text>No Products Found!!</Text>}
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <>
            <Product product={item} />
          </>
        )}
        numColumns={2}
        data={cartItemsWithDetails}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Cart;
