import { useTheme } from "styled-components";
import { THEMES } from "../../theme/themes";
import { GradientText, SubmitButton } from "../common/styled";

const Cta = ({ label }) => {
  const theme = useTheme();
  const isDarkMode = theme.type === THEMES.DARK;

  return (
    <SubmitButton width="120px" bgColor={theme.colors.cta.bgColor}>
      <GradientText dark={isDarkMode}>{label}</GradientText>
    </SubmitButton>
  );
};

export default Cta;
