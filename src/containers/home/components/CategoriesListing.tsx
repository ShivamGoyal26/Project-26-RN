import { FlatList, View } from "react-native";

// Files
import useGetCategories from "../hooks/useGetCategories";
import { Text } from "@/components/ui/text";
import Wrapper from "@/components/Wrapper";
import Category from "@/components/Category";
import { useRouter } from "expo-router";
import routes from "@/routes";

type CategoriesListProps = {
  hide?: boolean;
};

const CategoriesList = ({ hide }: CategoriesListProps) => {
  const { data, isPending, isError, error } = useGetCategories();
  const router = useRouter();

  return (
    <Wrapper isError={isError} isPending={isPending} error={error?.message}>
      {hide ? null : (
        <Text className="text-foreground text-2xl font-raleway-semibold mb-5">
          Categories
        </Text>
      )}
      <FlatList
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        numColumns={4}
        keyExtractor={(item) => item.id}
        data={data?.slice(0, 8)}
        renderItem={({ item }) => (
          <Category
            id={item.id}
            title={item.title}
            onPress={() => router.push(routes.PRODUCTS)}
          />
        )}
      />
    </Wrapper>
  );
};

export default CategoriesList;
