import React from 'react';
import { Card, CardBody, Text } from '@chakra-ui/react';
export const FloatingCard = ({
  children,
  delay,
  ...props
}) => <Card position="absolute" bg="whiteAlpha.100" backdropFilter="blur(4px)" borderRadius="xl" border="1px solid" borderColor="whiteAlpha.200" boxShadow="lg" p={4} maxW="280px" animation={`float 15s infinite ease-in-out ${delay}s`} sx={{
  '@keyframes float': {
    '0%': {
      transform: 'translate(0, 0) rotate(0deg)'
    },
    '33%': {
      transform: 'translate(10px, -30px) rotate(2deg)'
    },
    '66%': {
      transform: 'translate(-10px, 20px) rotate(-1deg)'
    },
    '100%': {
      transform: 'translate(0, 0) rotate(0deg)'
    }
  }
}} {...props}>
    <CardBody p={3}>
      <Text fontSize="sm" fontWeight="medium" color="white">
        {children}
      </Text>
    </CardBody>
  </Card>;