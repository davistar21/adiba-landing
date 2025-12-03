import { ArrowRight } from 'lucide-react';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import classes from '@/components/Footer/Footer.module.css';

const links = {
  products: [
    'All Services',
    'Digital Banking',
    'Accounts',
    'Cards',
    'Payment Flows',
    'Buffer for Cards',
    'BNPL - Splitpay',
    'Consumer Lending',
    'Fronting',
    'Bankident',
  ],
  company: ['About', 'Licenses', 'Press & Media', 'Careers', 'Newsletter', 'Blog'],
  contact: ['Help Center', 'Report Fraud', 'Working with us', 'Whistleblowing'],
};

export function Footer() {
  return (
    <Box style={{ position: 'relative', marginTop: 100, backgroundColor: 'white' }}>
      {/* Floating CTA Card */}
      <Container size="xl" style={{ position: 'relative', zIndex: 2 }}>
        <Box
          bg="white"
          p="xl"
          style={{
            borderRadius: '20px',
            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(50%)',
            border: '1px solid #E9ECEF',
          }}
        >
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" verticalSpacing="md">
            <Title order={3} size="h2" c="#0A112A">
              Start building your own banking <br /> service
            </Title>
            <Group justify="flex-end" align="center">
              <Button
                size="lg"
                color="#0A112A"
                radius="xl"
                rightSection={<ArrowRight size={20} />}
                styles={{
                  root: { backgroundColor: '#0A112A', paddingLeft: 30, paddingRight: 30 },
                }}
              >
                Talk to us
              </Button>
            </Group>
          </SimpleGrid>
        </Box>
      </Container>

      {/* Main Footer Content */}
      <Box
        bg="#0A112A"
        pt={160}
        pb={60}
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <Container size="xl">
          <Grid gutter={60}>
            {/* Products Column */}
            <Grid.Col span={{ base: 12, sm: 4, md: 2 }}>
              <Text c="#D38C3B" fw={600} mb="lg">
                Products
              </Text>
              <Stack gap="xs">
                {links.products.map((link) => (
                  <Text key={link} size="sm" className={classes['hoverLink']}>
                    {link}
                  </Text>
                ))}
              </Stack>
            </Grid.Col>

            {/* Company Column */}
            <Grid.Col span={{ base: 12, sm: 4, md: 2 }}>
              <Text c="#D38C3B" fw={600} mb="lg">
                Company
              </Text>
              <Stack gap="xs">
                {links.company.map((link) => (
                  <Text key={link} size="sm" style={{ cursor: 'pointer' }}>
                    {link}
                  </Text>
                ))}
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, sm: 4, md: 2 }}>
              <Text c="#D38C3B" fw={600} mb="lg">
                Contact
              </Text>
              <Stack gap="xs">
                {links.contact.map((link) => (
                  <Text key={link} size="sm" style={{ cursor: 'pointer' }}>
                    {link}
                  </Text>
                ))}
              </Stack>
            </Grid.Col>

            {/* Newsletter Column */}
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box bg="#1A2139" p="xl" style={{ borderRadius: '16px' }}>
                <Text c="#D38C3B" size="xl" mb="sm">
                  Subscribe to our newsletter
                </Text>
                <Text c="dimmed" size="sm" mb="xl" lh={1.6}>
                  Stay in the loop with the latest news, tips, and exclusive offers. Join our
                  community and never miss a beat.
                </Text>
                <Group gap={0} bg="white" p={4} style={{ borderRadius: '50px' }}>
                  <Input
                    placeholder="Enter your email"
                    variant="unstyled"
                    pl="md"
                    style={{ borderRadius: '50px', flex: 1 }}
                  />
                  <Button radius="xl" color="#1A2139" style={{ borderRadius: '50px' }}>
                    Subscribe
                  </Button>
                </Group>
              </Box>
            </Grid.Col>
          </Grid>

          <Divider my={60} color="rgba(255, 255, 255, 0.6)" />

          <Group justify="space-between">
            <Group gap="xs">
              <Image src="logo-light.svg" />
            </Group>
            <Text c="dimmed" size="sm">
              Copyright &copy; Adiba Organization
            </Text>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
