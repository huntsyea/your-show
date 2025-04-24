import React from 'react';
import { Box, Flex, Heading, Text, VStack, Textarea, Button } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';
import { NavBar } from '../NavBar';
import { FloatingCard } from './FloatingCard';
export function QuestionScreen() {
  return <Box width="100%" minHeight="100vh" background="linear-gradient(200deg, rgb(0, 35, 66) 50%, rgb(0, 18, 34))" color="white" position="relative" overflow="hidden">
      <NavBar />
      <Box position="absolute" inset={0} top="72px" opacity={0.4} zIndex={1}>
        <FloatingCard top="5%" left="5%" delay={0}>
          How do I start my debt-free journey?
        </FloatingCard>
        <FloatingCard top="8%" right="8%" delay={2}>
          Should I save for retirement or pay off my mortgage?
        </FloatingCard>
        <FloatingCard top="15%" left="25%" delay={1}>
          What's the best way to build an emergency fund?
        </FloatingCard>
        <FloatingCard top="30%" left="3%" delay={3}>
          How can I teach my kids about money?
        </FloatingCard>
        <FloatingCard top="50%" left="8%" delay={2.5}>
          What's the fastest way to pay off student loans?
        </FloatingCard>
        <FloatingCard top="35%" right="5%" delay={1.5}>
          How much house can I really afford?
        </FloatingCard>
        <FloatingCard top="55%" right="10%" delay={3.5}>
          Should I invest or pay off debt first?
        </FloatingCard>
        <FloatingCard bottom="15%" left="20%" delay={2.8}>
          How do I make a monthly budget that works?
        </FloatingCard>
        <FloatingCard bottom="8%" right="25%" delay={1.8}>
          What's the best way to save for my kids' college?
        </FloatingCard>
        <FloatingCard bottom="5%" left="5%" delay={3.2}>
          How can I increase my income?
        </FloatingCard>
        <FloatingCard top="20%" right="30%" delay={1.2}>
          When should I start investing in real estate?
        </FloatingCard>
        <FloatingCard top="12%" left="40%" delay={2.3}>
          How do I build generational wealth?
        </FloatingCard>
        <FloatingCard top="25%" left="15%" delay={3.7}>
          What's the best way to start a side business?
        </FloatingCard>
      </Box>
      <Flex minHeight="calc(100vh - 72px)" marginTop="72px" alignItems="center" justifyContent="center" direction="column" p={4} position="relative" zIndex={2}>
        <Box maxW="600px" width="100%" background="linear-gradient(to right bottom, rgba(216, 241, 252, 0.32), rgba(216, 241, 252, 0.08), rgba(216, 241, 252, 0.16))" borderRadius="16px" p={8} pb={10} position="relative" sx={{
        boxShadow: `
              0px 8px 24px 0px rgba(31, 36, 38, 0.18),
              inset 1px 1px 0px 0px rgba(255, 255, 255, 0.32),
              inset -1px -1px 0px 0px rgba(0, 0, 0, 0.4)
            `
      }} _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '16px',
        padding: '1px',
        background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0))',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        zIndex: 0
      }}>
          <VStack spacing={8} textAlign="center" align="stretch">
            <Box>
              <Heading as="h1" size="2xl" fontWeight="900" letterSpacing="tight" lineHeight="1.1" mb={4}>
                What's your biggest money question right now?
              </Heading>
              <Text fontSize="lg" fontWeight="medium" opacity={0.9} maxW="600px" mx="auto">
                Share your question and we'll help you find the answers you
                need.
              </Text>
            </Box>
            <Textarea placeholder="Type your question here..." size="lg" minH="120px" bg="whiteAlpha.100" border="1px solid" borderColor="whiteAlpha.200" _placeholder={{
            color: 'whiteAlpha.600'
          }} _hover={{
            borderColor: 'whiteAlpha.300'
          }} _focus={{
            borderColor: 'white',
            boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.6)'
          }} />
            <Button size="lg" bg="white" color="rgb(0, 115, 185)" rightIcon={<ArrowRight />} fontWeight="semibold" fontSize="18px" height="50px" px={8} letterSpacing="1.6px" alignSelf="center" _hover={{
            transform: 'translateY(-2px)',
            boxShadow: 'lg'
          }} _active={{
            transform: 'translateY(0)'
          }} transition="all 0.2s">
              Continue
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>;
}