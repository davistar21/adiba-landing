import { Anchor, Box, Container, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export function About() {
  return (
    <Box py={80} bg="white">
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={60} verticalSpacing={40}>
          <Box>
            {/* Placeholder for the Network/Graph Image */}
            <Image src="/network.png" />
          </Box>

          <Stack justify="center" gap="md">
            <Text c="#D38C3B" fw={600} style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>
              ABOUT ADIBA
            </Text>

            <Title
              order={2}
              style={{
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#0A112A',
                marginBottom: '1rem',
              }}
            >
              Innovate Faster, Cheaper
            </Title>

            <Text c="dimmed" size="lg" lh={1.6}>
              The breakneck pace of innovation in finance is forcing institutions to adapt quickly
              or risk falling behind. Traditional methods of launching new initiatives simply can't
              keep up.
            </Text>

            <Text c="dimmed" size="lg" lh={1.6}>
              ADIBA presents, day one, a ready set of omni-channel APIs that avails our partners the
              core features of any financial solution. These features include client onboarding,
              client management, savings, loans and investments account creation and management,
              cards management, payments and more.
            </Text>

            <Text c="dimmed" size="lg" lh={1.6}>
              With ADIBA's pre-built infrastructure and streamlined development process, you
              significantly reduce the time needed to launch new financial initiatives. This allows
              institutions focus on seizing market opportunities quickly and staying ahead of the
              competition, all the while ensuring the safety and integrity of your financial data.
            </Text>

            <Anchor href="#" c="#0A112A" fw={500} mt="md" underline="hover">
              Explore our APIs &rarr;
            </Anchor>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
