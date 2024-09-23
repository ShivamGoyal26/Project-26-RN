import { Text } from "@/components/ui/text";
import { Dimensions, View } from "react-native";
import FastImage from "react-native-fast-image";
import Carousel from "react-native-reanimated-carousel";

const data = ["50", "70", "60", "76"];

const CustomCarsoual = () => {
  const width = Dimensions.get("window").width;

  console.log(width);
  return (
    <Carousel
      loop
      width={width - 20}
      height={width / 2}
      autoPlay={true}
      data={data}
      scrollAnimationDuration={1000}
      onSnapToItem={(index) => console.log("current index:", index)}
      renderItem={({ index, item }) => (
        <View className="flex-1 flex-row items-center justify-between mx-10">
          <Text className="font-bold text-3xl text-primary">{`${item}% OFF`}</Text>
          <View className="w-44 h-44">
            <FastImage
              resizeMode="contain"
              style={{ flex: 1 }}
              source={require("../../../../assets/images/fruit.webp")}
            />
          </View>
        </View>
      )}
    />
  );
};

export default CustomCarsoual;
