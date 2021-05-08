import axios from "axios";

class AssetService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true,
    });
    this.service = service;
  }
    getAssets = () => {
        return this.service.get("/assets")
            .then((response) => {
                console.log("assets", response)
                return response.data
            });
    };
      
  addAsset = (name) => {
    return this.service
      .post("/assets", { name })
        .then((response) => response.data);
      
  };
};

export default AssetService;
