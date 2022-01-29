import Sun from "../../images/sun.png";
import Moon from "../../images/moon.png";
import { ToggleContainer, Icon, Switch } from "./themeTogglerStyled";
import { func } from "prop-types";
import { useTheme } from "styled-components";

const ThemeToggler = ({ toggleTheme }) => {
  const theme = useTheme();
  return (
    <ToggleContainer
      borderColor={theme.colors.toggler.border}
      bgColor={theme.colors.toggler.background}
      onClick={toggleTheme}
    >
      <Icon src={Moon} alt="Moon" />
      <Icon src={Sun} alt="Sun" />
      <Switch />
    </ToggleContainer>
  );
};

ThemeToggler.propTypes = {
  toggleTheme: func.isRequired,
};

export default ThemeToggler;
