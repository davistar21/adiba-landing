import { Anchor, Box, Button, Group, Image } from '@mantine/core';

export function Header() {
  return (
    <Box component="header" py="md" px="xl" bg="#FDF8F3">
      <Group justify="space-between" h="100%">
        <Group gap="xs">
          {/* Placeholder for Logo - approximating the look with text for now */}
          <Image src="/logo.png" />
        </Group>

        <Group gap="xl">
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
      </Group>
    </Box>
  );
}
