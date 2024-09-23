import { Post } from "@/services/posts.service";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { Text } from "./ui/text";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/useCartStore";
import { useMemo } from "react";

const Product = ({ product }: { product: Post }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);
  const cart = useCartStore((state) => state.cart);

  const addedProduct = useMemo(
    () => cart.find((item) => item.productId === product.id),
    [cart, product.id]
  );

  return (
    <View className="flex-1 m-2">
      <View className="h-60 w-full overflow-hidden rounded-xl">
        <FastImage
          style={{ flex: 1 }}
          resizeMode="cover"
          source={{
            uri: "https://imgs.search.brave.com/ZY3SRjhi49LWcVOufMzlnfcQrqMNVbMOkfVyGYjvUXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjg2/MTA0NzEwL3Bob3Rv/L21hbmdvLWZydWl0/LWFuZC1tYW5nby1z/bGljZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPThKUGdj/S1hoMHNxaFRQSnBa/YXRUclBZbjgySmMy/UURYNU5WOEs1Y1FW/TFk9",
          }}
        />
      </View>
      <Text numberOfLines={1} className="font-bold">
        {product.title}
      </Text>

      <View className="flex-row mt-5 gap-3">
        <Button
          onPress={() => addToCart(parseInt(product.id))}
          className=" flex-1"
        >
          <Text> {addedProduct ? addedProduct.quantity : "Add to Cart"}</Text>
        </Button>
        {addedProduct && (
          <Button
            variant={"destructive"}
            onPress={() => deleteFromCart(parseInt(product.id))}
            className="w-16"
          >
            <Text> {"-"}</Text>
          </Button>
        )}
      </View>
    </View>
  );
};

export default Product;
