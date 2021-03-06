import { IconButton, useColorMode } from 'theme-ui';
import { Sun } from './Icons';

export const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <IconButton
      title="Toggle dark mode"
      aria-label="Toggle dark mode"
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default');
      }}
    >
      <Sun />
    </IconButton>
  );
};
