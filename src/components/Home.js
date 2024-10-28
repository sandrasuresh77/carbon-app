import "./Home.scss";

import { Button } from "@carbon/react";

export default function Home() {
  return (
    <div className="container">
      <Button kind="primary">Button 1</Button>
      <Button kind="secondary">Button 2</Button>
      <Button kind="tertiary">Button 3</Button>
    </div>
  );
}
