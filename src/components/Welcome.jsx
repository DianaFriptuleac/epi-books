import { Alert, Button } from "react-bootstrap"
import { useState } from "react"
const Welcome = function(){

    const[show, setShow] = useState(true)
    return(
        <>
        <h2 className="text-center my-3">
        Enciclopedia Italiana
        </h2>
        <Alert show={show} variant="info">
        <Alert.Heading>Privacy</Alert.Heading>
        <p>
        Accetta i termini e le condizioni
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-info">
            Accetta
          </Button>
        </div>
      </Alert>

        </>
    )
}
export default Welcome