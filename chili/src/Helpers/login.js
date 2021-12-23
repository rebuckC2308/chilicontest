export const handleLogin = async (username, password, navigation) => {
  // Example POST method implementation:
  // Default options are marked with *

  try {
    const response = await fetch("http://10.0.2.2:3000/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }), // body data type must match "Content-Type" header
    });

    const res = await response.json();
    navigation.navigation.navigate("Starter Screen");
    return res; // parses JSON response into native JavaScript objects
  } catch (error) {
    console.error(error);
    console.log("Error in logging in");
    return;
  }
};
console.log("Login Pressed");
