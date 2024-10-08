import { Component } from "react";
import { Container, Row, Form, Col} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  // BookList nasce per ricevere dalle props un ARRAY di libri!
  // chiameremo questa prop... booksArray

// le props nei componenti a classe si recuperano dentro "this.props"

    state = {
        searchBook: '',
        selectedBookAsin: null, // Stato per tracciare il libro selezionato
    }

    //cambiamento del campo di recerca 
    handleSearch = (e) => {
        this.setState({searchBook: e.target.value})
    }

    //filtro i libri 
    filtraLibri = () =>{
        const {searchBook} = this.state
        const {libri} =  this.props

        return libri.filter((book) =>
        book.title.toLowerCase().includes(searchBook.toLowerCase()))

    }
      // Gestione della selezione del libro
  handleBookSelection = (asin) => {
    this.setState({
      selectedBookAsin: this.state.selectedBookAsin === asin ? null : asin,
    });
  };

  render() {
    const filteredBook = this.filtraLibri()
    return (
      <Container>
        <Row>
            <Col className="my-3 d-flex justify-content-center">
            <Form.Control
              type="text"
              placeholder="Cerca titolo libro"
              className="w-75"
              value={this.state.searchBook}
              onChange={this.handleSearch}
            />
            </Col>
            </Row>
           <Row className="gy-4">
          {filteredBook.map((scifiBook) => (
            <SingleBook   key={scifiBook.asin} libro={scifiBook} 
            isSelected={this.state.selectedBookAsin === scifiBook.asin}
            onBookClick={() => this.handleBookSelection(scifiBook.asin)}/>
         
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
