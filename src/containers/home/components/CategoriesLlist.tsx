import { ActivityIndicator, FlatList, View } from "react-native";
import useGetCategories from "../hooks/useGetCategories";
import { Text } from "@/components/ui/text";
import Wrapper from "@/components/Wrapper";
import FastImage from "react-native-fast-image";

const CategoriesList = () => {
  const { data, isPending, isError, error } = useGetCategories();

  return (
    <Wrapper isError={isError} isPending={isPending} error={error?.message}>
      <Text className="text-foreground text-2xl font-raleway-semibold mb-5">
        Categories
      </Text>
      <FlatList
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={4}
        data={data?.slice(0, 8)}
        renderItem={({ item }) => (
          <View className="w-20">
            <View
              style={{ overflow: "hidden" }}
              key={item.id}
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
            <Text className="flex-1 line-clamp-3 break-all text-center">
              {item.title}
            </Text>
          </View>
        )}
      />
    </Wrapper>
  );
};

export default CategoriesList;
