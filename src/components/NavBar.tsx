import React from 'react';
import { NavButton } from './NavButton';
import { Box, Flex, Link, Button } from '@chakra-ui/react';
export function NavBar() {
  return <Box width="100%" px={8} py={4} display="grid" gridTemplateColumns="576.719px 279.555px 576.727px" alignItems="center" bg="white" color="#1F2426" fontSize="base" lineHeight="6" fontFamily="canada-type-gibson,Arial,sans-serif" boxShadow="md" zIndex={10} position="relative">
      <Flex alignItems="center" gap={2} justifySelf="start" pl={4}>
        <Link href="/rp1/calls">
          <Box aria-label="Ramsey Logo" role="img" zIndex={0} display="flex" flexGrow={1} flexShrink={0} maxH="full" maxW="full" overflow="hidden" position="relative" width="140px">
            <Box flexGrow={1} flexShrink={0} flexBasis={0} transition="padding-bottom" duration={200} ease="cubic-bezier(0.4,0,0.2,1)" pointerEvents="none" pb={6} />
            <Box as="img" src="/ramsey-main-logo.svg" alt="Ramsey Logo" position="absolute" zIndex={-1} top={0} left={0} width="140px" height="24px" objectFit="contain" border="none" />
          </Box>
        </Link>
      </Flex>
      <Box justifySelf="center" width="full">
        <Flex alignItems="center" justifyContent="center" gap={4}>
          <NavButton>Home</NavButton>
          <NavButton>Calls</NavButton>
          <NavButton>Questions</NavButton>
        </Flex>
      </Box>
      <Box id="navbar-avatar" justifySelf="end" pr={4}>
        <Button as="a" href="/rp1/login" height="36px" minW="64px" px={4} display="inline-grid" alignItems="center" justifyContent="center" position="relative" cursor="pointer" color="#0073B9" fontWeight="semibold" fontSize="sm" letterSpacing="1.25px" borderRadius="md" transition="all 0.28s cubic-bezier(0.4,0,0.2,1)" variant="ghost" _hover={{
        bg: 'transparent',
        '& > span:first-of-type': {
          opacity: 0.04
        },
        '& > span:last-of-type': {
          opacity: 1
        }
      }}>
          <Box as="span" position="absolute" inset={0} bg="#0073B9" opacity={0} transition="opacity 0.2s ease-in-out" pointerEvents="none" borderRadius="md" />
          <Box as="span" position="absolute" inset={0} pointerEvents="none" />
          <Box as="span" display="flex" alignItems="center" justifyContent="center" whiteSpace="nowrap" transition="all 0.2s">
            Sign In
          </Box>
          <Box as="span" position="absolute" inset={0} border="2px solid" borderColor="#0073B9" opacity={0} transition="opacity 0.2s" pointerEvents="none" borderRadius="md" />
        </Button>
      </Box>
    </Box>;
}