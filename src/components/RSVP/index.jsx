import React from 'react'
import { Container } from 'components/Grid'
import styled from 'util/style'
import { Flex, Box } from '@rebass/grid'

const Form = styled.form``

const Input = styled.input`
  color: #33343c;
  border: solid 1px #33343c;
  width: 300px;
`

const Button = styled.button`
  color: #33343c;
  border: solid 1px #33343c;
  width: 400px;
`

const RSVP = () => (
  <Container>
    <Form name="rsvp" method="POST" data-netlify="true">
      <Flex py="0.5em">
        <Box width="100px">Name</Box>
        <Box>
          <Input type="text" name="name" />
        </Box>
      </Flex>
      <Flex py="0.5em">
        <Box width="100px">E-Mail</Box>
        <Box>
          <Input type="email" name="name" />
        </Box>
      </Flex>
      <Button type="submit">Send</Button>
    </Form>
  </Container>
)

export default RSVP
