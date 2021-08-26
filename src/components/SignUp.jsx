const SignUp = () => {
  const [username, setUsername] = useState("");

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // setUsername(username);
        }}
      ></form>
    </section>
  );
};

export default SignUp;
