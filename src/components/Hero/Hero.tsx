import {
  Box,
  Button,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

export function Hero() {
  return (
    <Box bg="#FDF8F3" py={80}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40} verticalSpacing={40}>
          <Stack justify="center" gap="xl">
            <Title
              order={1}
              style={{
                fontSize: '3.5rem',
                fontWeight: 600,
                lineHeight: 1.2,
                color: '#0A112A', // Dark navy from theme/image
              }}
            >
              Your Turnkey Banking Platform for{' '}
              <Text component="span" c="#D38C3B" inherit>
                Faster Financial Innovation.
              </Text>
            </Title>

            <Text c="dimmed" size="lg" maw={500}>
              Embedding finance into your online app? Building a digital bank or wallet? Running a
              credit finance app?
            </Text>

            <Text c="dimmed" size="lg" maw={500}>
              ADIBA Banking as a Platform (BaaP) solutions empowers our clients innovate faster on
              their digital offerings.
            </Text>

            <Group mt="md">
              <Button
                size="lg"
                color="#0A112A"
                radius="md"
                styles={{
                  root: { backgroundColor: '#0A112A' },
                }}
              >
                Start Now
              </Button>
              <Button variant="subtle" size="lg" color="#0A112A" rightSection={<span>&rarr;</span>}>
                Learn More
              </Button>
            </Group>
          </Stack>

          <Box>
            {/* Placeholder for Hero Image */}
            <Box
              h={500}
              w="100%"
              bg="#E9C59D"
              style={{
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* <Text c="white" fw={700} size="xl">
                Hero Image Placeholder
              </Text> */}
              <Image src="/hero-1.svg" />
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
