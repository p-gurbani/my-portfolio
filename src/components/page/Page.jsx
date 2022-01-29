import { useTheme } from "styled-components";
import { PageContainer } from "./pageStyled";

const Page = ({ children }) => {
  const theme = useTheme();

  return (
    <PageContainer mh={theme.spaces.padding.horizontal}>
      {children}
    </PageContainer>
  );
};

export default Page;
