class APIHandler {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.APIRequest = axios.create({
      baseURL: this.baseUrl,
    });
  }
  async getFullList() {
    try {
      const { data: allCharacters } = await this.APIRequest.get("/characters");
      return allCharacters;
    } catch (error) {
      console.log(error);
    }
  }

  async getOneRegister(id) {
    try {
      const { data: characterById } = await this.APIRequest.get(
        `/characters/${id}`
      );
      console.log("response :>> ", characterById);
      return characterById;
    } catch (err) {
      console.log(err);
    }
  }

  async createOneRegister(newCharactInfo) {
    
  }

  async updateOneRegister() {

  }

  async deleteOneRegister() {

  }
}
