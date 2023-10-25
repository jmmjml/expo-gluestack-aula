import { GluestackUIProvider, Text, Box, Heading, Input, InputField, Button, ButtonText } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import { useState } from 'react';

export default function App() {
  const[idade,setIdade] = useState("")
  const[resposta,setResposta] = useState("")

  const handleResposta = () =>{
    const idadeConvertida = parseInt(idade,10)
    if(idadeConvertida<18){
      setResposta("Menor de idade");
    } else{
      setResposta("Maior de idade");
    }
  }

  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" height={'$full'} justifyContent="center" alignItems="center" gap={"$5"} p={"$5"}>
        <Heading>Idade</Heading>
        <Input w={'$full'}>
          <InputField placeholder='18'value={idade} onChangeText={setIdade} keyboardType='numeric'/>
        </Input>
        <Button w={'$full'} onPress={handleResposta}>
          <ButtonText>Calcular</ButtonText>
        </Button>
        <Text>{resposta}</Text>
      </Box>
    </GluestackUIProvider>
  );
}