import { View } from "react-native";

// Files
import { Text } from "@/components/ui/text";
import { LucideIcon } from "lucide-react-native";
import { cn } from "@/lib/utils";

type CustomHeaderProps = {
  title: string;
  className?: string;
};

const CustomHeader = ({ title, className }: CustomHeaderProps) => {
  return (
    <View className={cn(className)}>
      <Text className="text-2xl">{title}</Text>
    </View>
  );
};

export default CustomHeader;
