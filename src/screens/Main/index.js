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
  Block,
} from "./styles";

function Main() {
  const [theme] = useRecoilState(constants.theme);

  const { githubIcon, externalIcon } = theme.images;

  return (
    <Wrapper>
      <Header>
        <Subheading>About me</Subheading>
        <Section>
          <Paragraph>{copy.about}</Paragraph>
          <Link>
            {copy.social.map(({ icon, link }) => (
              <Link href={link}>
                <Icon src={icon} alt={link} />
              </Link>
            ))}
          </Link>
        </Section>
      </Header>
      <Body>
        <Block>
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
        </Block>
        <Block>
          <Subheading>Publications</Subheading>
          <Section>
            {copy.publications.map(({ name, publication, link, date }) => (
              <Article>
                <Link style={{ fontWeight: 500 }} href={link}>
                  {name}
                </Link>
                <Meta>
                  <Pub>{publication}, </Pub>
                  {date}
                </Meta>
              </Article>
            ))}
          </Section>
        </Block>
        <Section>
          <span style={{ fontWeight: 600 }}>Contact</span> me at
          warrend555(at)gmail.com
        </Section>
      </Body>
    </Wrapper>
  );
}

export default Main;
