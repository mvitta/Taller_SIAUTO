export const validarUser = async function (url, user) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    if (data) {
      return [true, data];
    } else {
      return false;
    }
  } catch (error) {
    console.log();
    new Error(error);
    return false;
  }
};

export const fetchData = async function (url) {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(new Error(error));
    return false;
  }
};

export const registerUser = async function (data) {
  try {
    let url = "http://localhost:4000/agregarUsuarios";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    console.log("Datos Enviados Exitosamente: ", res);
  } catch (error) {
    console.log(new Error(error));
  }
};

export const apiURL = process.env.REACT_APP_BACKEND_URL;
