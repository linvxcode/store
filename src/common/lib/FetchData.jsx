import ApiClient from "./ApiClient";

const FetcData = async (endpoint) => {
  try {
    const { data } = await ApiClient.get(endpoint);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default FetcData;
