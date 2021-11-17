export const handleRegister = async () => {
  // Example POST method implementation:
  // Default options are marked with *

  try {
    const response = await fetch("http://10.0.2.2:3000/users", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: "test@gmail.com",
        password: "usersPassword!",
      }), // body data type must match "Content-Type" header
    });
    console.log("FINISHED");
    console.log("GOT HERE");
    const res = await response.json();
    console.log(res);
    return res; // parses JSON response into native JavaScript objects
  } catch (error) {
    console.error(error);
    return;
  }
};
