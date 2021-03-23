import React from "react";
import { useRecoilState } from "recoil";
import constants from "atoms/constants";
import copy from "copy";
import {
  Wrapper,
  Header,
  Body,
  Heading,
  Subheading,
  Paragraph,
  Title,
  Links,
  Icon,
  Section,
  Project,
  Article,
  Link,
  Pub,
  Meta,
} from "./styles";

function Main() {
  const [theme] = useRecoilState(constants.theme);

  const { githubIcon, externalIcon } = theme.images;

  return (
    <Wrapper>
      <Header>
        <Heading>Daniel Warren</Heading>
        <Paragraph>{copy.about}</Paragraph>
        <Link>
          {copy.social.map(({ icon, link }) => (
            <Link href={link}>
              <Icon src={icon} />
            </Link>
          ))}
        </Link>
      </Header>
      <Body>
        <Subheading>Projects</Subheading>
        <Section>
          {copy.projects.map(({ name, description, github, demo }) => (
            <Project>
              <Title>{name}</Title>
              <Paragraph>{description}</Paragraph>
              <Links>
                <Link href={github}>
                  <Icon src={githubIcon} />
                </Link>
                <Link href={demo}>
                  <Icon src={externalIcon} />
                </Link>
              </Links>
            </Project>
          ))}
        </Section>
        <Subheading>Publications</Subheading>
        <Section>
          {copy.publications.map(({ name, publication, link, date }) => (
            <Article>
              <Link style={{ fontWeight: 600 }} href={link}>
                {name}
              </Link>
              <Meta>
                <Pub>{publication}, </Pub>
                {date}
              </Meta>
            </Article>
          ))}
        </Section>
      </Body>
    </Wrapper>
  );
}

export default Main;
