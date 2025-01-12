import { API } from "../config.js";

export const addDataToModel = async (data, name) => {
  try {
    console.log(`${API}`);
    const response = await fetch(`${API}/${name}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error while adding data:", err);
  }
};

export const readData = async (name) => {
  try {
    const response = await fetch(`${API}/${name}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error while reading data:", err);
  }
};

export const deleteData = async (name) => {
  try {
    const response = await fetch(`${API}/${name}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    console.error("Error while deleting data:", err);
  }
};
