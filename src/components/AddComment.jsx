import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    personalComment: {
      comment: '',
      rate: '',
      elementId: this.props.asin,
    }
  };

  handleInputChange = (e, property) => {
    this.setState({
      personalComment: {
        ...this.state.personalComment,
        [property]: e.target.value,
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: 'POST',
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjJlYWYyNjBjYzAwMTVjYzBkZWUiLCJpYXQiOjE3MjQzMjc1NjQsImV4cCI6MTcyNTUzNzE2NH0.g888918CD5qke7EIIwh90BjBGeHnwAIHTubT-bzC7fI",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.personalComment),
    })
      .then((response) => {
        if (response.ok) {
          alert('Commento salvato!');
          this.setState({
            personalComment: {
              comment: '',
              rate: '',
              elementId: this.props.asin,
            },
          });
        } else {
          alert('Errore nella chiamata API!');
        }
      })
      .catch((err) => {
        alert('Errore: ' + err);
      });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Punteggio</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => this.handleInputChange(e, 'rate')}
                  value={this.state.personalComment.rate}
                >
                  <option value="">Seleziona un voto</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Label>Scrivi il tuo commento</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  required
                  onChange={(e) => this.handleInputChange(e, 'comment')}
                  value={this.state.personalComment.comment}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Invia Commento
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddComment;
