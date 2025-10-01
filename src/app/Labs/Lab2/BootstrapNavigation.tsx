import { Button, Card, CardBody, CardImg, CardText, CardTitle, Nav, NavItem, NavLink } from "react-bootstrap";


export default function BootstrpNavigation() {
  return (
  <div id="wd-css-navigating-with-tabs">
  <h2>Tabs</h2>
  <Nav variant="tabs">
    <NavItem>
      <NavLink href="#/Labs/Lab2/Active">Active</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#/Labs/Lab2/Link1">Link 1</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#/Labs/Lab2/Link2">Link 2</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#/Labs/Lab2/Disabled" disabled>Disabled</NavLink>
    </NavItem>
  </Nav>

  <div id="wd-css-navigating-with-cards">
  <h2> Cards </h2>
  <Card style={{ width: "18rem" }}>
    <CardImg variant="top" src="/images/nyc.jpg" />
    <CardBody>
      <CardTitle>New York</CardTitle>
      <CardText>
        The City That Never Sleeps!
      </CardText>
      <Button variant="primary">Explore</Button>
    </CardBody>
      </Card>
  </div>
  </div>
  );
}