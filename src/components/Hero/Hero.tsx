import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

export function Hero() {
  return (
    <Box bg="#FDF8F3" py={80}>
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40} verticalSpacing={40}>
          <Stack justify="center" gap="xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Title
                order={1}
                style={{
                  lineHeight: 1.2,
                  color: '#0A112A', // Dark navy from theme/image
                }}
                fz={{ base: '2.5rem', md: '3.5rem' }}
                fw={600}
              >
                Your Turnkey Banking Platform for{' '}
                <Text component="span" c="#D38C3B" inherit>
                  Faster Financial Innovation.
                </Text>
              </Title>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Text c="dimmed" size="lg" maw={500}>
                Embedding finance into your online app? Building a digital bank or wallet? Running a
                credit finance app?
              </Text>

              <Text c="dimmed" size="lg" maw={500} mt="md">
                ADIBA Banking as a Platform (BaaP) solutions empowers our clients innovate faster on
                their digital offerings.
              </Text>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
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
                <Button
                  variant="subtle"
                  size="lg"
                  color="#0A112A"
                  rightSection={<span>&rarr;</span>}
                >
                  Learn More
                </Button>
              </Group>
            </motion.div>
          </Stack>

          <Box>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeInOut' }}
              style={{ height: '100%' }}
            >
              <Image
                src="/hero-1.svg"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
