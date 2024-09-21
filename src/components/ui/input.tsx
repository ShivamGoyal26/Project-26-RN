import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

// Files
import { cn } from "@/lib/utils";
import { Text } from "./text";
import { ControllerRenderProps, UseFormTrigger } from "react-hook-form";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Info } from "@/lib/icons/Info";

type InputProps = {
  label?: string;
  inputStyle?: string;
  error?: string;
  className?: string;
  placeholderClassName?: string;
  trigger?: UseFormTrigger<any>;
  field?: ControllerRenderProps<any>;
  LeftIcon?: () => React.ReactElement;
  RightIcon?: () => React.ReactElement;
  infoMessage?: string;
} & React.ComponentPropsWithoutRef<typeof TextInput>;

const Input = ({
  className,
  placeholderClassName,
  label,
  inputStyle,
  error,
  trigger,
  field,
  RightIcon,
  LeftIcon,
  infoMessage,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={className}>
      {label && (
        <View className="flex-row items-center gap-2 mb-2">
          <Text className="font-raleway-semibold">{label}</Text>
          {infoMessage && (
            <Tooltip delayDuration={150}>
              <TooltipTrigger className=" active:opacity-50">
                <Info
                  size={14}
                  strokeWidth={2.5}
                  className="w-4 h-4 text-foreground/70"
                />
              </TooltipTrigger>
              <TooltipContent className="py-2 mx-4 shadow">
                <Text className="native:text-lg">{infoMessage}</Text>
              </TooltipContent>
            </Tooltip>
          )}
        </View>
      )}
      <View
        className={cn(
          "flex-row h-12 items-center rounded-md font-medium border border-input px-3 text-base native:leading-[1.25] placeholder:text-muted-foreground file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2",
          props.editable === false && "opacity-50 web:cursor-not-allowed",
          inputStyle,
          isFocused && "border-secondary",
          error && "border-destructive",
          isFocused ? "bg-accent" : "bg-background"
        )}
      >
        <TouchableOpacity>{LeftIcon && <LeftIcon />}</TouchableOpacity>

        <TextInput
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            if (trigger) trigger(field?.name);
          }}
          className={cn("flex-1  h-12 text-foreground ")}
          placeholderClassName={cn(" text-foreground ", placeholderClassName)}
          {...props}
          value={field?.value}
          onChangeText={field?.onChange}
        />

        <TouchableOpacity>{RightIcon && <RightIcon />}</TouchableOpacity>
      </View>
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
