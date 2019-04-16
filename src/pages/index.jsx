import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import RSVP from 'components/RSVP'
import { SplashImage, CrewImage } from 'components/Image'

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
    & > div {
      padding-bottom: 1em;
    }
  }
`
const ResponsiveFlex2 = styled(Flex)`
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
    & > :last-child {
      padding-bottom: 1em;
    }
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

const SubHeadline = styled.h2`
  font-family: Roboto;
  padding: 0;
  padding-top: 1em;
  font-size: 1.5em;
  line-height: 1.25;

  @media (max-width: 800px) {
    font-size: 1.5em;
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
        <SplashImage />
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
        <Headline>Geschenke</Headline>
        <Paragraph>
          Wir bitten Euch, uns wenn möglich keine Geschenke (bitte auch keine
          Umschläge mit Geld) am Tag der Hochzeit zu überreichen!
        </Paragraph>
        <Paragraph>
          Falls ihr uns etwas schenken möchtet, würden wir uns sehr über einen
          Beitrag für unsere geplanten Flitterwochen freuen. Auf folgender
          Website (hier kommt Website als Link) könnt ihr individuell einen
          Beitrag dazu auswählen.
        </Paragraph>
      </Box>
      <Box>
        <Headline>Anreise &amp; Unterkunft</Headline>

        <Paragraph>
          Der Neimeshof ist ein Gutshof in Kempen bei Krefeld. Er ist sehr
          ländlich gelegen und nur mit Auto erreichbar. Die Anreisezeit von
          Düsseldorf beträgt ca. 35 Minuten mit dem Auto.
        </Paragraph>
        <Paragraph>
          Bei Anreise per Flugzeug oder Bahn empfiehlt sich Düsseldorf als Ziel,
          für die Unterkunft entweder Düsseldorf (mehr Auswahl bei den Hotels)
          oder die nähere Umgebung wie Krefeld (etwas näher an der Location).
        </Paragraph>
        <Paragraph>
          In der Nacht werden dann mehrere Großraumtaxis für 3 Uhr bestellt,
          wenn wir für die Hinfahrt ein Taxi für euch organisieren sollen, gebt
          uns gerne Bescheid.
        </Paragraph>
      </Box>

      <Box>
        <Headline>Sonstige Informationen</Headline>
        <SubHeadline>Reden und sonstige Wünsche</SubHeadline>
        <Paragraph>
          Wir freuen uns natürlich sehr, falls ihr eine Rede oder einen kleinen
          Programmpunkt vorbereiten möchtet. Sprecht den Zeitrahmen und
          ungefähren Inhalt aber bitte mit unseren Trauzeugen (siehe Kontakt)
          ab.
        </Paragraph>
        <SubHeadline>Kinder </SubHeadline>
        <Paragraph>
          Da unsere Feier eine reine Abendveranstaltung (mit lauter Musik) ist
          und die Location limitierte Plätze hat, können wie leider außerhalb
          der direkten Familie keine Kinder einladen.{' '}
        </Paragraph>

        <SubHeadline>Dresscode</SubHeadline>
        <Paragraph>Werft Euch in Schale</Paragraph>
      </Box>

      <Box>
        <Headline>Kontakt &amp; weitere Fragen</Headline>

        <Paragraph>
          Falls ihr weitere Fragen habt, wendet Euch im Vorfeld natürlich gerne
          an uns. Zu fortgeschrittener Zeit (am Tag davor/ während der Hochzeit)
          würden wir Euch bitten, unsere Trauzeugen zu kontaktieren.
        </Paragraph>

        <ResponsiveFlex2 mt="1em">
          <Box width="150px">Maria Reh</Box>
          <Box width="250px">maria.julia.reh@gmail.com</Box>
          <Box width="150px">+49 170 5644375</Box>
        </ResponsiveFlex2>

        <ResponsiveFlex2>
          <Box width="150px">Jean Dallest</Box>
          <Box width="250px">jdallest@gmail.com</Box>
          <Box width="150px">+41 768121991</Box>
        </ResponsiveFlex2>
        <Box pt="2em">
          <CrewImage />
        </Box>
      </Box>
    </Wrapper>
  </Layout>
)

export default IndexPage
