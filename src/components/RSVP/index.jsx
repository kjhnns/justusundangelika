import React from 'react'
import { Container } from 'components/Grid'
import styled from 'util/style'

const Form = styled.form``

const Label = styled.label``
const Button = styled.button``

const RSVP = () => (
  <Container>
    <Form name="contact" netlify>
      <Label>
        Name <input type="text" name="name" />
      </Label>
      <Label>
        Email <input type="email" name="email" />
      </Label>
      <Button type="submit">Send</Button>
    </Form>
  </Container>
)

export default RSVP
