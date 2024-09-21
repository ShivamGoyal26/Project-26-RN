import { ActivityIndicator, View } from "react-native";

import { Text } from "@/components/ui/text";
import React from "react";

type WrapperProps = {
  isPending: boolean;
  isError: boolean;
  error?: string;
  children: React.ReactNode;
};

const Wrapper = ({ isPending, isError, error, children }: WrapperProps) => {
  if (isPending) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator className="text-primary" />
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>{error || "Something went wrong"}</Text>
      </View>
    );
  }

  return children;
};

export default Wrapper;
