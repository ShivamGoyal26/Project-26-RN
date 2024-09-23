import { Pressable, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Text } from "./ui/text";

type CategoryProps = {
  title: string;
  id: string;
  onPress: () => void;
};

const Category = ({ title, id, onPress }: CategoryProps) => {
  return (
    <Pressable onPress={onPress} className="w-20">
      <View
        style={{ overflow: "hidden" }}
        key={id}
        className="border rounded-full h-20 w-20 overflow-hidden"
      >
        <FastImage
          source={{
            uri: "https://imgs.search.brave.com/KyBm1QMdMV8u5QZqRJ7d2zyxV-f_mxWi_3WjmdNJ474/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waWxlLWRpZmZl/cmVudC1mcnVpdHMt/aW5jbHVkaW5nLWtp/d2kta2l3aS1raXdp/XzEzMTMxNDYtMjM2/MzguanBnP3NpemU9/NjI2JmV4dD1qcGc",
          }}
          style={{ flex: 1 }}
          resizeMode="cover"
        />
      </View>
      <Text className="flex-1 line-clamp-3 break-all text-center">{title}</Text>
    </Pressable>
  );
};

export default Category;
