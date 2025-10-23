import { ComponentProps } from "react";
import {
  Button as GlueButton,
  Text,
  ButtonSpinner,
} from "@gluestack-ui/themed";

type Props = ComponentProps<typeof GlueButton> & {
  title: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
};

export function Button({
  title,
  variant = "solid",
  isLoading = false,
  ...rest
}: Props) {
  return (
    <GlueButton
      {...rest}
      w="$full"
      h="$14"
      bg={variant === "outline" ? "$gray200" : "$indigo400"}
      //borderWidth={variant === "outline" ? "$1" : "$0"}
      //borderColor="$green500"
      rounded="$sm"
      $active-bg={variant === "outline" ? "$gray100" : "$indigo300"}
      disabled={isLoading}
    >
      {!isLoading ? (
        <Text
          color={variant === "outline" ? "$gray900" : "$white"}
          fontFamily="$heading"
          fontSize="$sm"
        >
          {title}
        </Text>
      ) : (
        <ButtonSpinner color="$white" />
      )}
    </GlueButton>
  );
}
