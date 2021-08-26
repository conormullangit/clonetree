import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // setUsername(username);
        }}
      >
        <label>
          <input type="text" />
        </label>
      </form>
    </section>
  );
};

export default SignUp;
