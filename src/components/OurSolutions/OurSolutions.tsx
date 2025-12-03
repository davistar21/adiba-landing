import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import {
  Box,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';

const solutions = [
  {
    title: 'Digital Banking',
    description:
      'Create your own neobank and digital bank with diverse account options, using our Digital Banking and Accounts APIs to customize and scale your financial services.',
    image: '/digital-banking.png', // Placeholder
  },
  {
    title: 'Payment',
    description:
      'Our APIs enable seamless integration of payment gateways, mobile wallets, and peer-to-peer transactions, ensuring quick and secure payments for your users.',
    image: '/payment.png', // Placeholder
  },
  {
    title: 'Lending',
    description:
      'With our APIs, you can provide personalized loan options, competitive interest rates, and efficient loan processing to your customers.',
    image: '/lending.png', // Placeholder
  },
  {
    title: 'Identification',
    description:
      "Our identity management APIs offer robust identification services, including verification methods, and biometric authentication to protect your customers' identities.",
    image: '/identification.png', // Placeholder
  },
];

export function OurSolutions() {
  return (
    <Box py={80}>
      <Container size="xl">
        <Stack align="center" gap="md" mb={60}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Text c="#D38C3B" fw={600} style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>
              TRUSTED SOLUTIONS
            </Text>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Title
              order={2}
              ta="center"
              style={{
                fontSize: '3rem',
                fontWeight: 600,
                color: '#0A112A',
                lineHeight: 1.2,
              }}
            >
              Complete embedded <br /> finance solutions for your <br /> retail business.
            </Title>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Text c="dimmed" ta="center" size="lg" maw={600} mt="md">
              Integrate banking seamlessly into your customer journey with our retail engine and
              omnichannel API.
            </Text>
          </motion.div>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={30}>
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card padding="lg" radius="md" bg="transparent" style={{ border: 'none' }}>
                <Card.Section mb="md">
                  <Box
                    h={200}
                    bg="#E9C59D"
                    style={{
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* <Text c="white" fw={500}>
                      Image Placeholder
                    </Text> */}
                    <Image src="solution-1.jpg" />
                  </Box>
                </Card.Section>

                <Text fw={700} size="xl" c="#D38C3B" mb="xs">
                  {solution.title}
                </Text>

                <Text size="sm" c="dimmed" lh={1.6} mb="lg" style={{ minHeight: '120px' }}>
                  {solution.description}
                </Text>

                <Button
                  variant="light"
                  color="#D38C3B"
                  radius="md"
                  fullWidth={false}
                  styles={{
                    root: {
                      backgroundColor: '#E9C59D',
                      color: '#0A112A',
                      width: 'fit-content',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
        <Group justify="center" mt={80}>
          <Button
            radius="xl"
            size="lg"
            mt="md"
            style={{
              width: 'fit-content',
            }}
          >
            All Services <ArrowRight size={20} />
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
