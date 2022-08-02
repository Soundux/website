import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span">
          Soundux
        </Text>
      </Title>
      <Title align="center">🚧 Under construction</Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        This will be the website for the next iteration of the project. See our{' '}
        <Anchor href="https://soundux.rocks" size="lg">
          current website
        </Anchor>{' '}
        and our{' '}
        <Anchor href="https://github.com/Soundux/Soundux/issues/591" size="lg">
          public tracking issue
        </Anchor>
        .
      </Text>
    </>
  );
}
