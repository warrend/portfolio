import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.font};
  width: min(90vw, 900px);
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing.xGiant};
`;

export const Header = styled.div`
  display: block;
  grid-template-columns: 150px 1fr;
  grid-column-gap: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.giant};
  border-bottom: ${({ theme }) => `5px solid ${theme.colors.border}`};
  padding-bottom: ${({ theme }) => theme.spacing.xLarge};
  font-weight: 600;
  font-size: 24px;

  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
  }
`;

export const Block = styled.div`
  display: block;
  grid-template-columns: 150px 1fr;
  grid-column-gap: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.giant};
  border-bottom: ${({ theme }) => `5px solid ${theme.colors.border}`};

  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
  }
`;

export const Body = styled.div``;

export const Section = styled.div`
  margin-top: 0.1rem;
  padding-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Heading = styled.h1``;

export const Subheading = styled.h3``;

export const Paragraph = styled.p``;

export const Project = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.giant};
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: 600;

  @media ${({ theme }) => theme.device.tablet} {
    font-size: 1.2rem;
  }
`;

export const Links = styled.div``;

export const Link = styled.a``;

export const Icon = styled.img`
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Article = styled.article`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Meta = styled.span`
  margin-left: ${({ theme }) => theme.spacing.xSmall};
`;

export const Pub = styled.span``;
