import axios from "axios";

// 기본값 지정
export const fetchData = async (offset: Number = 0, limit: Number = 20) => {
  try {
    const res = await axios.get(
      `http://10.0.0.114:3100/admin/subscribe/list?offset=${offset}&limit=${limit}`
    );
    return res;
  } catch (err) {
    console.error("ERROR : data,", err);
  }
};
