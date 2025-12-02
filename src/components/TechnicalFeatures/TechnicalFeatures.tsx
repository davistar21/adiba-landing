import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Globe, Share2 } from 'lucide-react';
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
  ThemeIcon,
  Title,
} from '@mantine/core';

const features = [
  {
    icon: Code2,
    title: 'Cutting-edge technology',
    description:
      'Our innovative Banking Cloud platform features some of the most advanced RESTful APIs in the global market. These APIs are designed to support scalability and facilitate international expansion.',
  },
  {
    icon: Share2,
    title: 'Powerful APIs',
    description:
      'With our smart API accessible services, you can easily manage the data of your users in real-time throughout the entire customer lifecycle: from onboarding to long-term support.',
  },
  {
    icon: Globe,
    title: 'Cloud-based banking',
    description:
      "Our entire banking infrastructure operates in the cloud, enabling us to deliver outstanding banking experiences for our partners' customers. We are at the forefront of developing innovative and fully digital financial products.",
  },
  {
    icon: Database,
    title: 'Data Mesh Architecture',
    description:
      'Utilise our advanced data mesh architecture to harness critical data for informed decision-making, strategic planning, forecasting, and meeting regulatory requirements.',
  },
];

export function TechnicalFeatures() {
  return (
    <Box
      py={100}
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(/curly-rectangle-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container size="xl" style={{ position: 'relative', zIndex: 1 }}>
        <Stack align="center" gap="md" mb={80}>
          <Text c="#D38C3B" fw={600} style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>
            TECHNICAL FEATURES
          </Text>
          <Title
            order={2}
            ta="center"
            style={{
              fontSize: '3rem',
              fontWeight: 600,
              color: '#0A112A',
            }}
          >
            Banking tech reimagined
          </Title>
        </Stack>

        <SimpleGrid cols={{ base: 1, lg: 3 }} spacing={40} verticalSpacing={60}>
          {/* Left Column */}
          <Stack gap={60} justify="center">
            {/* Feature 1 */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card padding="xl" radius="lg" bg="white" shadow="sm">
                <ThemeIcon size={60} radius="xl" color="#FDF8F3" mb="md">
                  {(() => {
                    const Icon = features[0].icon;
                    return <Icon size={30} color="#D38C3B" />;
                  })()}
                </ThemeIcon>
                <Text fw={700} size="xl" c="#D38C3B" mb="sm">
                  {features[0].title}
                </Text>
                <Text size="sm" c="dimmed" lh={1.6}>
                  {features[0].description}
                </Text>
              </Card>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card padding="xl" radius="lg" bg="white" shadow="sm">
                <ThemeIcon size={60} radius="xl" color="#FDF8F3" mb="md">
                  {(() => {
                    const Icon = features[2].icon;
                    return <Icon size={30} color="#D38C3B" />;
                  })()}
                </ThemeIcon>
                <Text fw={700} size="xl" c="#D38C3B" mb="sm">
                  {features[2].title}
                </Text>
                <Text size="sm" c="dimmed" lh={1.6}>
                  {features[2].description}
                </Text>
              </Card>
            </motion.div>
          </Stack>

          {/* Center Column - Phone Image */}
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ width: '100%', maxWidth: '350px' }}
            >
              <Image src="/tilted-phone.png" w="100%" />
            </motion.div>
          </Box>

          {/* Right Column */}
          <Stack gap={60} justify="center">
            {/* Feature 2 */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card padding="xl" radius="lg" bg="white" shadow="sm">
                <ThemeIcon size={60} radius="xl" color="#FDF8F3" mb="md">
                  {(() => {
                    const Icon = features[1].icon;
                    return <Icon size={30} color="#D38C3B" />;
                  })()}
                </ThemeIcon>
                <Text fw={700} size="xl" c="#D38C3B" mb="sm">
                  {features[1].title}
                </Text>
                <Text size="sm" c="dimmed" lh={1.6}>
                  {features[1].description}
                </Text>
              </Card>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card padding="xl" radius="lg" bg="white" shadow="sm">
                <ThemeIcon size={60} radius="xl" color="#FDF8F3" mb="md">
                  {(() => {
                    const Icon = features[3].icon;
                    return <Icon size={30} color="#D38C3B" />;
                  })()}
                </ThemeIcon>
                <Text fw={700} size="xl" c="#D38C3B" mb="sm">
                  {features[3].title}
                </Text>
                <Text size="sm" c="dimmed" lh={1.6}>
                  {features[3].description}
                </Text>
              </Card>
            </motion.div>
          </Stack>
        </SimpleGrid>

        <Group justify="center" mt={80}>
          <Button
            size="lg"
            color="#0A112A"
            radius="xl"
            rightSection={<ArrowRight size={20} />}
            styles={{
              root: { backgroundColor: '#0A112A', paddingLeft: 40, paddingRight: 40 },
            }}
          >
            See Our API Doc
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
