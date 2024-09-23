import { View } from "react-native";

// Files
import { Text } from "@/components/ui/text";
import { LucideIcon } from "lucide-react-native";
import { cn } from "@/lib/utils";

type CustomHeaderProps = {
  title: string;
  className?: string;
  LeftIcon?: () => LucideIcon;
  RightIcon?: () => LucideIcon;
};

const CustomHeader = ({
  title,
  className,
  LeftIcon,
  RightIcon,
}: CustomHeaderProps) => {
  return (
    <View className={cn(className, "flex-row items-center")}>
      {LeftIcon && <LeftIcon />}
      <Text className="text-2xl flex-1">{title}</Text>
      {RightIcon && <RightIcon />}
    </View>
  );
};

export default CustomHeader;
