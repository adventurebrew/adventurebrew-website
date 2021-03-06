import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Grid, Flex, Box, Link } from './base-components';
import Logo from './logo';
import Icon from './icon';
import FacebookIcon from 'emotion-icons/fa-brands/Facebook';
import YoutubeIcon from 'emotion-icons/fa-brands/Youtube';
import GithubIcon from 'emotion-icons/fa-brands/Github';
import theme from '../theme';

const FACEBOOK_PAGE = 'https://www.facebook.com/groups/200491360554968/';
const GITHUB = 'https://github.com/adventurebrew';
const YOUTUBE_PAGE = 'https://www.youtube.com/channel/UCKKV7KOyXuNYV7p1tblAEtg';
const currentYear = new Date().getFullYear();
const { breakpoints } = theme;
const LogoStyle = css`
  transform: rotate(4deg);
  user-select: none;
`;

const Copyrights = ({ className }) => (
  <Flex flexDirection="column" alignItems="flex-start" className={className}>
    <Logo css={LogoStyle} mb="3rem" />
    <Flex className="icons" mb="3rem">
      <Link href={FACEBOOK_PAGE}>
        <Icon>
          <FacebookIcon size="3rem" />
        </Icon>
      </Link>
      <Link href={YOUTUBE_PAGE}>
        <Icon>
          <YoutubeIcon size="3rem" />
        </Icon>
      </Link>
      <Link href={GITHUB}>
        <Icon>
          <GithubIcon size="3rem" />
        </Icon>
      </Link>
    </Flex>
    <Box color="brightTurquoise" opacity="0.6">
      כל הזכיות שמורות להרפתקה בעברית © {currentYear}
    </Box>
  </Flex>
);

const StyledFooter = styled(Grid)`
  grid-area: footer;
  align-content: end;
  grid-template-columns: minmax(40rem, 1fr) repeat(3, 1fr);
  grid-template-areas: 'copyrights . .';
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    grid-template-columns: minmax(40rem, 1fr);
    grid-template-areas: 'copyrights';
    justify-self: center;
  }
  .copyrights {
    grid-area: copyrights;
    .icon {
      margin-left: 2rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter as="footer">
      <Copyrights className="copyrights" />
    </StyledFooter>
  );
};

export default Footer;
