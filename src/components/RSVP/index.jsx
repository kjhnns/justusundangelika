import React from 'react'
import { Container } from 'components/Grid'
import styled from 'util/style'
import { Flex, Box } from '@rebass/grid'

const Form = styled.form``

const Input = styled.input`
  color: #33343c;
  border: solid 1px #33343c;
  max-width: 300px;
  width: 100%;
  background: #fff;
  padding: 5px;
`

const Button = styled.button`
  color: #33343c;
  border: solid 1px #33343c;
  width: 100%;
  max-width: 450px;
  background: #fff;
  padding: 5px;
`

const Label = styled(Box)`
  width: 150px;
  display: flex;
  align-items: center;
`

const Response = styled.div`
  padding-top: 2em;
  font-size: 1.3em;
  font-style: italic;
`
const Select = styled.select`
  border: solid 1px #33343c;
  background: #fff;
  border-radius: 0;
  padding: 5px;
`
const Option = styled.option`
  color: #33343c;
  border-radius: 0;
  padding: 5px;
`

const encode = data => {
  return Object.keys(data)
    .map(key => {
      // eslint-disable-next-line prefer-template
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    })
    .join('&')
}

const states = {
  PRISTINE: 0,
  SUCCESS: 1,
  ERROR: 2,
}

class RSVP extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      state: states.PRISTINE,
      amountOfGuests: 1,
      comingToTheWedding: 'coming',
      name: '',
      email: '',
    }
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'rsvp', ...this.state }),
    })
      .then(() => this.setState({ state: states.SUCCESS }))
      .catch(() => this.setState({ state: states.ERROR }))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const {
      state,
      comingToTheWedding,
      amountOfGuests,
      name,
      email,
    } = this.state
    return (
      <Container>
        {(state === states.PRISTINE || state === states.ERROR) && (
          <Form onSubmit={this.handleSubmit}>
            <Flex py="0.5em">
              <Label>Anzahl Personen</Label>
              <Box width="50px">
                <Input
                  type="number"
                  name="amountOfGuests"
                  value={amountOfGuests}
                  onChange={this.handleChange}
                />
              </Box>
            </Flex>
            <Flex py="0.5em" flexDirection="row">
              <Label>Teilnahme</Label>
              <Box>
                <Select
                  name="comingToTheWedding"
                  value={comingToTheWedding}
                  onChange={this.handleChange}
                >
                  <Option value="coming">Ich werde kommen</Option>
                  <Option value="notComing">Ich werde nicht kommen</Option>
                </Select>
              </Box>
            </Flex>
            <Flex py="0.5em">
              <Label>Name</Label>
              <Box width="300px">
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </Box>
            </Flex>
            <Flex py="0.5em">
              <Label>E-Mail</Label>
              <Box width="300px">
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </Box>
            </Flex>
            <Button type="submit">Send</Button>
          </Form>
        )}
        {state === states.SUCCESS && (
          <Response>Erfolgreich versendet!</Response>
        )}
        {state === states.ERROR && (
          <Response>
            Es ist ein Fehler aufgetreten, bitte versuche es noch einmal.
          </Response>
        )}
      </Container>
    )
  }
}

export default RSVP
