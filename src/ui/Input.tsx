import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import clsx from "clsx";

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  containerClassName?: string;
  icon?: React.ReactNode;
};

export function Input({
  label,
  error,
  containerClassName,
  icon,
  ...props
}: InputProps) {
  return (
    <View className={clsx("w-full", containerClassName)}>
      {label && (
        <Text className="mb-1 text-sm font-medium text-gray-700">{label}</Text>
      )}
      <View className="relative w-full">
        {icon && (
          <View className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
            {icon}
          </View>
        )}
        <TextInput
          {...props}
          placeholderTextColor="#9ca3af"
          className={clsx(
            "rounded-xl border py-3 text-base text-gray-900",
            "border-gray-300 focus:border-blue-500",
            icon ? "pl-10 pr-4" : "px-4", 
            error && "border-red-500"
          )}
        />
      </View>
      {error && <Text className="mt-1 text-xs text-red-500">{error}</Text>}
    </View>
  );
}
