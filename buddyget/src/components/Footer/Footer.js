import {
  StyledFooter,
  StyledFooterText,
  StyledMail,
  StyledFooterLaw,
  StyledFooterLawText,
  StyledFooterLinks,
  StyledFooterContent,
} from "./Footer.styled";
import { Divider, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterContent>
        <StyledFooterText>Let's talk!</StyledFooterText>
        <StyledFooterLinks>
          <StyledMail>contact@budgetapp.io</StyledMail>
          <IconButton color="secondary" aria-label="linkedIn" href="#">
            <LinkedInIcon />
          </IconButton>
        </StyledFooterLinks>
        <Divider />
        <StyledFooterLaw>
          <StyledFooterLawText>
            Copyright &copy; {new Date().getFullYear()} BuddyGet
          </StyledFooterLawText>
        </StyledFooterLaw>
      </StyledFooterContent>
    </StyledFooter>
  );
};
