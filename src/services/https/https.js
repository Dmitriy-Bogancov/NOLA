import axios from "axios";

export const postRegistrationApi = async (body) => {
  try {
    return await axios.post("https://.../signup", body);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postLoginApi = async (body) => {
  const { data } = await axios.post("https://.../login", body);
  return data;
};

// ----------Account---------
export const getAccountApi = async (token) => {
  try {
    return fetch("https://.../account", {
      headers: { Authorization: `${token}` },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postAccoutApi = async (token, account) => {
  try {
    return fetch("https://.../account", {
      method: "POST",
      body: JSON.stringify(account),
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const patchAccoutApi = async (token, id, { ...body }) => {
  try {
    return fetch(`https://.../account/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

// -----------LiNKS-------------
export const getLinksApi = async (token) => {
  try {
    const { data } = await axios.get("https://.../account/  LINKS ??", {
      headers: { Authorization: `${token}` },
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const postLinksApi = async (token, links) => {
  try {
    await fetch("https://.../account/  LINKS ?? ", {
      method: "POST",
      body: JSON.stringify(links),
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLinksApi = async (id) => {
  const { data } = await axios.delete(`https://.../account/  LINKS ?? /${id}`);
  return data;
};

// -----------POSTS-------------
export const getAllPostApi = async () => {
  try {
    return fetch("https://...", {
      method: "GET",
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllAdverticerPostApi = async (token) => {
  try {
    return fetch("https:... /POST ??", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getPostApi = async (token, id) => {
  try {
    return fetch(`https://.../POST ??/${id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const postPostApi = async (token, post) => {
  try {
    return fetch("https:.../POST ??", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const patchPostApi = async (token, id, { ...body }) => {
  try {
    return fetch(`https://.../POST ??/ ${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        Authorization: `${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const deletePostApi = async (token, id) => {
  const { data } = await axios.delete(`https://.../POST ??/${id}`, {
    headers: { Authorization: `${token}` },
  });
  return data;
};
