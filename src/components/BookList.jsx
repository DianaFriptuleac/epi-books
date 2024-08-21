import { Component } from "react";
import { Container, Row, Form} from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {

    state = {
        searchBook: '',
    }

    //cambiamento del campo di recerca 
    handleSearch = (e) => {
        this.setState({searchBook: e.target.value})
    }

    //filtro i libri 
    filterBooks = () =>{
        const {searchBook} = this.state
        const {libri} =  this.props

        return libri.filter((book) =>
        book.title.includes(searchBook))

    }

  render() {
    const filteredBook = this.filterBooks()
    return (
      <Container>
        <Row className="my-3 justify-content-center">
            <Form.Control
            type="text" placeholder = "Cerca titolo libro"
            className="w-75"
            value = {this.state.searchBook}
            onChange = {this.handleSearch}>
            </Form.Control>
            </Row>
           <Row className="gy-4">
          {filteredBook.map((book) => (
            <SingleBook   key={book.asin} libro={book} />
         
          ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
