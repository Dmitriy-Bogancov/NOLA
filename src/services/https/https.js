import axios from "axios";

export const postRegistrationApi = async (body) => {
     await axios.post("https://connections-api.herokuapp.com/users/signup", body)
 }

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMzYzU3Y2MyNWZkMjAwMTQzZjcxNTciLCJpYXQiOjE3MDczMzY1NzF9.8kQDkONnkYUQb_N24INo_XvjJ4O3uKdgStATruGhEmE
export const postLoginApi = async (body) => {
  const {data} = await axios.post("https://connections-api.herokuapp.com/users/login", body)
    return data
}

export const getAccountApi = async () => {
  const { data } = await axios.get(
    "https://65203841906e276284c43450.mockapi.io/contacts"
  );
  return data;
};

export const postAccoutApi = async (account) => {
 await axios.post("https://65203841906e276284c43450.mockapi.io/contacts", account);
};

export const putAccoutApi = async (id, account) => {
  const { data } = await axios.put(
    `https://65203841906e276284c43450.mockapi.io/contacts/${id}`,
    account
  );
  return data;
};

export const getLinksApi = async () => {
  const { data } = await axios.get(
    "https://65203841906e276284c43450.mockapi.io/contacts"
  );
  return data;
};

export const postLinksApi = async (links) => {
  await axios.post("https://65203841906e276284c43450.mockapi.io/contacts", {
    links: links,
  });
};

export const deleteLinksApi = async (id) => {
  const { data } = await axios.delete(
    `https://65203841906e276284c43450.mockapi.io/contacts/${id}`
    );
    return data;   
};
