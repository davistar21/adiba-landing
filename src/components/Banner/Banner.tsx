import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Box, Button, Container, Group, Text, Title } from '@mantine/core';

export function Banner() {
  return (
    <Box py={80} bg="#FDF8F3">
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" verticalSpacing="md">
          <Box style={{ maxWidth: '600px' }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Title
                order={2}
                style={{
                  fontSize: '2rem',
                  fontWeight: 500,
                  color: '#0A112A',
                  lineHeight: 1.3,
                  marginBottom: '1rem',
                }}
              >
                <Text span inherit fw={700}>
                  Leading fintechs
                </Text>{' '}
                across the world run ADIBA applications.
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Text c="#D38C3B" size="lg">
                Join us and make your company a better place.
              </Text>
            </motion.div>
          </Box>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <Button
              size="lg"
              color="#0A112A"
              radius="xl"
              rightSection={<ArrowRight size={20} />}
              styles={{
                root: {
                  backgroundColor: '#0A112A',
                  paddingLeft: 30,
                  paddingRight: 30,
                  height: '56px',
                },
              }}
            >
              Book a demo
            </Button>
          </motion.div>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
