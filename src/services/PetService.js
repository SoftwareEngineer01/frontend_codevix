import http from "../http-common";

class PetService {

  getPets() {
    return http.get("/pets");
  }


  addPet(pet) {
    return http.post("/pet", pet);
  }

  getPet(id) {
    return http.get(`/pet/${id}`);
  }  

  updatePet(data) {
    return http.put(`/pet/`, data);
  }

  delete(id) {
    return http.delete(`/pet/${id}`);
  }

  getCategories() {
      return http.get("/categories");
  }

  getTags() {
      return http.get("/tags");
  }

}
export default new PetService();