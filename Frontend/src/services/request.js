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
    alert(new Error(error));
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

export const apiURL = process.env.REACT_APP_BACKEND_URL;
