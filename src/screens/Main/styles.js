import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.font};
  width: min(90vw, 900px);
  margin: 0 auto;
  margin-top: ${({ theme }) => theme.spacing.giant};
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.giant};
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: start;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const Section = styled.div`
  margin-top: 0.25rem;
`;

export const Heading = styled.h1``;

export const Subheading = styled.h3``;

export const Paragraph = styled.p``;

export const Project = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.giant};
`;

export const Title = styled.h3``;

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
