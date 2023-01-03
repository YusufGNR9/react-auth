import { Container, Col, Row } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import FreeComponent from "./components/FreeComponent";
import AuthComponent from "./components/AuthComponent";
import Account from "./components/Account";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>Girş ekranlarına hoşgeldiniz!</h1>

          <section id="navigation">
            <a href="/">Home</a>
            <a href="/free">Free Component</a>
            <a href="/auth">Auth Component</a>
          </section>
        </Col>
      </Row>

      <Switch>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent} />
        <ProtectedRoutes path="/auth" component={AuthComponent} />
        <Route path="/forget-password" component={null} />
      </Switch>
    </Container>
  );
}

export default App;
