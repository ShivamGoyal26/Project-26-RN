import React, { useState } from "react";
import { TextInput, View } from "react-native";

// Files
import { cn } from "@/lib/utils";
import { Text } from "./text";
import { ControllerRenderProps, UseFormTrigger } from "react-hook-form";

type InputProps = {
  label?: string;
  inputStyle?: string;
  error?: string;
  className?: string;
  placeholderClassName?: string;
  trigger?: UseFormTrigger<any>;
  field: ControllerRenderProps<any>;
} & React.ComponentPropsWithoutRef<typeof TextInput>;

const Input = ({
  className,
  placeholderClassName,
  label,
  inputStyle,
  error,
  trigger,
  field,
  ...restprops
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={className}>
      {label && <Text className="font-raleway-semibold mb-2">{label}</Text>}
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          if (trigger) trigger(field.name);
        }}
        className={cn(
          "h-12 rounded-md font-medium border border-input  px-3  text-base   native:leading-[1.25] text-foreground placeholder:text-muted-foreground file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
          restprops.editable === false && "opacity-50 web:cursor-not-allowed",
          inputStyle,
          isFocused && "border-secondary",
          error && "border-destructive",
          isFocused ? "bg-accent" : "bg-background"
        )}
        placeholderClassName={cn("text-muted-foreground", placeholderClassName)}
        {...restprops}
        value={field.value}
        onChangeText={field.onChange}
      />
      {error && (
        <Text className="font-raleway-semibold text-destructive mt-2">
          {error}
        </Text>
      )}
    </View>
  );
};

Input.displayName = "Input";

export { Input };
