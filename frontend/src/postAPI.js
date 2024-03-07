import axios from "axios";

export const getPostData = () => {
  return axios.get(
    '"mongodb+srv://dvtung7f6:Tung12345@cluster0.6desfmr.mongodb.net/Demo?retryWrites=true&w=majority"'
  );
};
