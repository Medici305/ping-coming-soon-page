import React from "react";
import { Container } from "../util";

const Top = () => {
  return (
    <Container>
      {/* 1. Title */}
      <h3>PING</h3>
      {/* 2. Slogan */}
      <h1>
        We Are launching <span>soon!</span>
      </h1>
      {/* 3. Sub heading */}
      <p>Subscribe and get notified</p>
      {/* 4. Input and button */}
      <form>
        <input
          type="email"
          name="email"
          placeholder="Your email address..."
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <button>Notify Me</button>
      </form>
    </Container>
  );
};

export default Top;
