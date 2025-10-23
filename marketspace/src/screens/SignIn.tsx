import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

import {
  VStack,
  Center,
  Text,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import Logo from "@assets/logo.svg";

type FormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 2 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <VStack flex={1} px="$10" pb="$16" bgColor="$warmGray100">
          <Center my="$24">
            <Logo />
            <Heading color="$gray900" fontSize="$4xl" mt="$6">
              marketspace
            </Heading>
            <Text color="$gr" fontSize="$sm">
              Seu espaço de compra e venda
            </Text>
          </Center>

          <Center gap="$2">
            <Text mb="$4" color="$gray700">
              Acesse sua conta
            </Text>
            <Controller
              control={control}
              name="email"
              rules={{ required: "Informe o e-mail" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{ required: "Informe a senha" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Button
              variant="solid"
              title="Acessar"
              isLoading={isLoading}
              //onPress={handleSubmit(handleSignIn)}
            />
          </Center>

          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray400" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>
            <Button
              title="Criar Uma Conta"
              variant="outline"
              //onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
