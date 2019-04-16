import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import RSVP from 'components/RSVP'
import Image from 'components/Image'

import { Flex, Box } from '@rebass/grid'

import styled from 'util/style'

const Wrapper = styled.div`
  padding: 7em 0;

  @media (max-width: 800px) {
    padding: 2em 2em;
  }
`

const ResponsiveFlex = styled(Flex)`
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Headline = styled.h1`
  font-family: Roboto;
  padding: 0;
  padding-top: 1em;
  font-size: 3.5em;
  line-height: 1.25;

  @media (max-width: 800px) {
    font-size: 2em;
  }
`

const Paragraph = styled.div`
  color: #171717;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.025rem;
  width: calc(100% + 0.025rem);
  font-size: 1em;
  line-height: 1.75;
  font-weight: 400;
  margin-top: 1.5rem;
  margin-bottom: 0;
`

const Line = styled.p`
  color: #171717;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.025rem;
  width: calc(100% + 0.025rem);
  font-size: 1em;
  line-height: 1.75;
  font-weight: 400;
  margin: 0;
  padding: 0;
`

const IndexPage = () => (
  <Layout>
    <Wrapper>
      <SEO title="Home" />
      <Box>
        <Headline>Angelika &amp; Justus</Headline>
        <Paragraph>
          Hallo ihr Lieben! Hier findet ihr alle Informationen rund um unsere
          Hochzeit. Wir freuen uns schon darauf, mit euch zu feiern!
        </Paragraph>
      </Box>
      <Box>
        <Image />
      </Box>
      <Box>
        <Headline>Zeitplan</Headline>
        <ResponsiveFlex>
          <Box width="300px">
            <Line>Freitag, den 11.10.2019</Line>
            <Line>Neimeshof</Line>
            <Line>Stadtfeld 32 </Line>
            <Line>47906 Kempen</Line>
          </Box>
          <Box>
            <Flex flexDirection="row">
              <Box width="120px">Ankunft:</Box>
              <Box>16:00 Uhr</Box>
            </Flex>
            <Flex flexDirection="row">
              <Box width="120px">Zeremonie:</Box>
              <Box>16:30 Uhr </Box>
            </Flex>
            <Flex flexDirection="row">
              <Box width="120px">Ende:</Box>
              <Box>ca. 3:00 Uhr</Box>
            </Flex>
          </Box>
        </ResponsiveFlex>
      </Box>
      <Box>
        <Headline>RSVP</Headline>
        <Paragraph>
          Teilt uns bitte hier mit, ob ihr es einrichten könnt
        </Paragraph>
        <RSVP />
      </Box>
      <Box>
        <Headline>Dresscode</Headline>
        <Paragraph>Werft Euch in Schale</Paragraph>
      </Box>
      <Box>
        <Headline>Geschenke</Headline>
        <Paragraph>
          Wir bitten Euch, uns wenn möglich keine Geschenke (bitte auch keine
          Umschläge mit Geld) am Tag der Hochzeit zu überreichen! Falls ihr uns
          etwas schenken möchtet, würden wir uns sehr über einen Beitrag für
          unsere geplanten Flitterwochen freuen. Auf folgender Website (hier
          kommt Website als Link) könnt ihr individuell einen Beitrag dazu
          auswählen.
        </Paragraph>
      </Box>
    </Wrapper>
  </Layout>
)

export default IndexPage
