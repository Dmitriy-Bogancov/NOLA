import axios from "axios";
import { instance } from "../axios";

// ----------Token---------
export const postRefreshToken = async (body) => {
  const data = await instance.post("/auth/refresh-token", body);

  return data;
};

export const postlogOut = async () => {
  const data = await instance.post("/auth/logout");

  return data;
};

// ----------Account---------
export const getAccountApi = async () => {
  const data = await instance.get("/accounts");
  return data;
};

// =======
export const postAccoutApi = async (body) => {
  const { data } = await instance.put(`/accounts`, body);
  return data;
};

export const putAccoutApi = async ({ ...body }) => {
  console.log(body);
  const { data } = await instance.put(`/accounts`, body);
  return data;
};
// =======

// -----------POSTS-------------
export const getAllPostApi = async () => {
  return await instance.get("/advertisements");
};

export const getPostIdApi = async (id) => {
  return await instance.get(`/advertisements/${id}`);
};

export const postPostApi = async (post) => {
  const { data } = await instance.post(`/advertisements`, post);
  return data;
};

export const patchPostApi = async (id, body) => {
  try {
    const { data } = await instance.put(`/advertisements/${id}`, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostApi = async (id) => {
  const { data } = await instance.delete(`/advertisements/${id}`);
  return data;
};

// -----------DRAFTS-------------

export const postDraftsPost = async (body) => {
  try {
    const { data } = await instance.post(`/Drafts`, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDraftsPost = async () => {
  try {
    const { data } = await instance.get(`/Drafts`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getDraftsPostId = async (id) => {
  try {
    const { data } = await instance.get(`/Drafts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const patchDraftsPostId = async (id, body) => {
  try {
    const { data } = await instance.put(`/Drafts/${id}`, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDraftsPostId = async (id) => {
  try {
    const { data } = await instance.delete(`/Drafts/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// ---------RecoverPassword-------

export const postForgotPassword = async (email) => {
  const { data } = await instance.post(
    `/Account/forgot-password?email=${email}`
  );
  return data;
};

export const postResetPassword = async (body) => {
  const data = await instance.post(`/Account/reset-password`, body);
  return data;
};

export const getResetPassword = async (email, token) => {
  const data = await instance.get(`/Account/reset-password?${email}&${token}`);
  return data;
};

// -----------POST-------------
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

export const deleteLinksApi = async (token, id) => {
  const { data } = await axios.delete(`https://.../account/  LINKS ?? /${id}`, {
    headers: { Authorization: `${token}` },
  });
  return data;
};
