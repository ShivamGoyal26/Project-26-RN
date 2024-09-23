import { Post } from "@/services/posts.service";
import { View } from "react-native";
import FastImage from "react-native-fast-image";
import { Text } from "./ui/text";
import { Button } from "./ui/button";

const Product = ({ product }: { product: Post }) => {
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

      <Button className="mt-5">
        <Text>{"Add to Cart"}</Text>
      </Button>
    </View>
  );
};

export default Product;
