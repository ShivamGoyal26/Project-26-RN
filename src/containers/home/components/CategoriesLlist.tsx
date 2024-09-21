import { ActivityIndicator, FlatList, View } from "react-native";
import useGetCategories from "../hooks/useGetCategories";
import { Text } from "@/components/ui/text";
import Wrapper from "@/components/Wrapper";

const CategoriesList = () => {
  const { data, isPending, isError, error } = useGetCategories();

  return (
    <Wrapper isError={isError} isPending={isPending} error={error?.message}>
      <Text className="text-primary text-2xl font-raleway-semibold mb-5">
        Categories
      </Text>
      <FlatList
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={4}
        data={data?.slice(0, 8)}
        renderItem={({ item }) => (
          <View>
            <View
              key={item.id}
              className="border rounded-full h-20 w-20"
            ></View>
            <Text className="flex-1 line-clamp-1 break-all">
              {item.title.slice(0, 10)}
            </Text>
          </View>
        )}
      />
    </Wrapper>
  );
};

export default CategoriesList;
