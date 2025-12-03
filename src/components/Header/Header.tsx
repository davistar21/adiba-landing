import { Anchor, Box, Burger, Button, Drawer, Group, Image, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <Box component="header" py="md" px="xl" bg="#FDF8F3">
      <Group justify="space-between" h="100%">
        <Group gap="xs">
          {/* Placeholder for Logo - approximating the look with text for now */}
          <Image src="/logo.png" />
        </Group>

        <Group gap="xl" visibleFrom="sm">
          <Anchor href="/" c="adiba.9" fw={600} underline="never">
            Home
          </Anchor>
          <Anchor href="/contact" c="adiba.9" fw={400} underline="never">
            Contact us
          </Anchor>
          <Button color="adiba.9" radius="md" size="md" fw={500}>
            Go to Dashboard
          </Button>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

        <Drawer
          opened={opened}
          onClose={close}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <Stack gap="lg">
            <Anchor href="/" c="adiba.9" fw={600} underline="never" onClick={close}>
              Home
            </Anchor>
            <Anchor href="/contact" c="adiba.9" fw={400} underline="never" onClick={close}>
              Contact us
            </Anchor>
            <Button color="adiba.9" radius="md" size="md" fw={500} fullWidth onClick={close}>
              Go to Dashboard
            </Button>
          </Stack>
        </Drawer>
      </Group>
    </Box>
  );
}
