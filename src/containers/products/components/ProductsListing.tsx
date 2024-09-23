import Product from "@/components/Product";
import Wrapper from "@/components/Wrapper";
import useGetCategories from "@/containers/home/hooks/useGetCategories";
import { FlatList } from "react-native";

const ProductsListing = () => {
  const { isPending, isError, error, data } = useGetCategories();

  return (
    <Wrapper isError={isError} isPending={isPending} error={error?.message}>
      <FlatList
        contentContainerStyle={{ gap: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => <Product product={item} />}
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
      />
    </Wrapper>
  );
};
export default ProductsListing;
