import { View } from "react-native";

// Files
import CustomHeader from "@/components/CustomHeader";
import { useAuthStore } from "@/store/useAuthStore";
import useGetProfile from "./hooks/useGetProfile";
import Wrapper from "@/components/Wrapper";
import { Text } from "@/components/ui/text";

const Profile = () => {
  const userId = useAuthStore((state) => state.userId);

  const { isPending, isError, error, data } = useGetProfile(userId);

  return (
    <Wrapper isError={isError} isPending={isPending} error={error?.message}>
      <View className="p-4 flex-1">
        <CustomHeader className="mb-10" title="Profile" />

        <View className="gap-4">
          <Text className="text-xl">Welcome, {data?.name}</Text>
          <Text className="text-lg">Email: {data?.email}</Text>
          <Text className="text-lg">Phone: {data?.phone}</Text>
          <Text className="text-lg">Username: {data?.username}</Text>
          <Text className="text-lg">Website: {data?.website}</Text>
          <Text className="text-lg">
            Address: {data?.address.street}, {data?.address.city}
          </Text>
        </View>
      </View>
    </Wrapper>
  );
};

export default Profile;
