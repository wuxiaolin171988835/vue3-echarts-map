import service from "../utils/service";
export const getMapData = () => {
  return service({
    medthod: "get",
    url: "/getMapData"
  });
};
