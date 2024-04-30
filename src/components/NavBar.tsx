import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  Menu,
  Text,
  rem,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import {
  IconSun,
  IconMoon,
  IconMenu,
  IconHome,
  IconAddressBook,
  IconInfoCircle,
} from '@tabler/icons-react';

const NavBar = () => {
  const location = useLocation();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <Box
      style={{
        borderBottom: `${rem(1)} solid var(--mantine-color-default-border)`,
      }}
    >
      <Container role="navigation" h="4rem" size="xl">
        <Group h="100%" justify="space-between">
          <Text
            component={Link}
            to="/"
            reloadDocument={location.pathname === '/'}
            fz="xl"
            fw={700}
          >
            Sticky
            <Text span c="blue.6" inherit>
              Thoughts
            </Text>
          </Text>

          <Group>
            <Group display={{ base: 'none', xs: 'flex' }}>
              <Button
                component={Link}
                to="/"
                variant="subtle"
                size="compact-sm"
              >
                Home
              </Button>

              <Button
                component={Link}
                to="/about"
                variant="subtle"
                size="compact-sm"
              >
                About
              </Button>

              <Button
                component={Link}
                to="/contact"
                variant="subtle"
                size="compact-sm"
              >
                Contact
              </Button>
            </Group>

            <Box display={{ base: 'block', xs: 'none' }}>
              <Menu shadow="md" width={110}>
                <Menu.Target>
                  <ActionIcon
                    aria-label="toggle menu"
                    variant="default"
                    size="lg"
                  >
                    <IconMenu size="1em" />
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item
                    component={Link}
                    to="/"
                    leftSection={<IconHome size="1em" />}
                  >
                    Home
                  </Menu.Item>
                  <Menu.Item
                    component={Link}
                    to="/about"
                    leftSection={<IconInfoCircle size="1em" />}
                  >
                    About
                  </Menu.Item>
                  <Menu.Item
                    component={Link}
                    to="/contact"
                    leftSection={<IconAddressBook size="1em" />}
                  >
                    Contact
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Box>

            <ActionIcon
              aria-label="Toggle color scheme"
              variant="default"
              size="lg"
              onClick={() =>
                setColorScheme(
                  computedColorScheme === 'light' ? 'dark' : 'light'
                )
              }
            >
              {computedColorScheme === 'light' ? (
                <IconSun size="1em" />
              ) : (
                <IconMoon size="1em" />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};

export default NavBar;
