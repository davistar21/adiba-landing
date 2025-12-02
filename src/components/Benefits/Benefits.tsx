import { motion } from 'framer-motion';
import { BarChart, Settings, ShieldCheck, Zap } from 'lucide-react';
import {
  Box,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

const benefits = [
  {
    icon: Zap,
    title: 'Faster Time to Market',
    description:
      "ADIBA's pre-built infrastructure and streamlined development process significantly reduce the time needed to launch new financial initiatives. This allows institutions to seize market opportunities quickly and stay ahead of the competition",
  },
  {
    icon: Settings,
    title: 'Effortless Administration',
    description:
      "ADIBA's back office admin console is designed to be user-friendly and intuitive. This allows financial institutions to easily manage user accounts, system settings, and monitor platform activity without the need for extensive technical expertise.",
  },
  {
    icon: BarChart,
    title: 'Real-time Visibility',
    description:
      'With real-time data dashboards and reports, institutions can gain immediate insights into their financial performance, allowing for quicker adjustments and improved decision-making.',
  },
  {
    icon: ShieldCheck,
    title: 'Simplified Compliance',
    description:
      "Effective data analysis is crucial for regulatory compliance. ADIBA's pre-built reports can help streamline compliance efforts by providing readily available data for regulatory reporting needs.",
  },
];

export function Benefits() {
  return (
    <Box py={100} bg="white">
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={60} verticalSpacing={40}>
          {/* Left Column: Text Content */}
          <Stack gap="xl">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Text
                c="#D38C3B"
                fw={600}
                style={{ letterSpacing: '1px', textTransform: 'uppercase' }}
              >
                BENEFITS
              </Text>
              <Title
                order={2}
                style={{
                  fontSize: '3rem',
                  fontWeight: 600,
                  color: '#0A112A',
                  lineHeight: 1.2,
                  marginTop: '1rem',
                  marginBottom: '2rem',
                }}
              >
                Innovative Banking <br /> Technology
              </Title>
            </motion.div>

            <Stack gap={40}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Group align="flex-start" wrap="nowrap">
                    <ThemeIcon size={50} radius="xl" color="#FDF8F3" style={{ flexShrink: 0 }}>
                      {(() => {
                        const Icon = benefit.icon;
                        return <Icon size={24} color="#D38C3B" />;
                      })()}
                    </ThemeIcon>
                    <Box>
                      <Text fw={700} size="lg" c="#0A112A" mb="xs">
                        {benefit.title}
                      </Text>
                      <Text size="md" c="dimmed" lh={1.6}>
                        {benefit.description}
                      </Text>
                    </Box>
                  </Group>
                </motion.div>
              ))}
            </Stack>
          </Stack>

          {/* Right Column: Image Collage */}
          <Box>
            <SimpleGrid cols={2} spacing="md">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Box h={300} bg="#E9ECEF" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <Image
                    src="/collage-1.jpg"
                    h="100%"
                    w="100%"
                    fit="cover"
                    fallbackSrc="https://placehold.co/400x300?text=Image+1"
                  />
                </Box>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                style={{ marginTop: '40px' }}
              >
                <Box h={300} bg="#E9ECEF" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                  <Image
                    src="/collage-2.jpg"
                    h="100%"
                    w="100%"
                    fit="cover"
                    fallbackSrc="https://placehold.co/400x300?text=Image+2"
                  />
                </Box>
              </motion.div>
            </SimpleGrid>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ marginTop: '20px' }}
            >
              <Box h={350} bg="#E9ECEF" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <Image
                  src="/collage-3.jpg"
                  h="100%"
                  w="100%"
                  fit="cover"
                  fallbackSrc="https://placehold.co/800x400?text=Image+3"
                />
              </Box>
            </motion.div>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
