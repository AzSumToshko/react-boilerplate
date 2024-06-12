import { FaBeer } from "react-icons/fa";
import { Button, Container } from "./styles/Styles";

const Card = () => {
  return (
    <Container>
      <h1>Hello, Styled Components!</h1>
      <h1>
        Let's have a beer! <FaBeer />{" "}
      </h1>
      <Button>Click Me</Button>
    </Container>
  );
};

export default Card;
