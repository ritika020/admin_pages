import axios from "axios";

export const sendBranchNews = async (data) => {
  console.log(data);
  return await axios
    .post("https://nimaaaa-project.herokuapp.com/branchnews", data,{
        headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const sendCentralNews = async (data) => {
  console.log(data);
  return await axios
    .post("https://nimaaaa-project.herokuapp.com/news", data,{
        headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
