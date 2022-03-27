export const fetchData = async function (url, user) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error(error);
  }
};

export const apiURL = process.env.REACT_APP_BACKEND_URL;
