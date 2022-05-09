<template>
    <div>              
      
        <div class="container">

             <h2 class="mb-3">Agregar Mascota</h2> 

            <form @submit.prevent="addPet">
                <div class="form-group mb-3">
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" v-model="pet.name" id="name" placeholder="Nombre" required>
                </div>
                <div class="form-group mb-3">
                    <label for="category">Categoría</label>
                    <select class="form-control" v-model="pet.category" id="category" required>
                        <option value="" selected="true" disabled="disabled">Seleccione una categoría</option>
                        <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                     <label for="tags">Tags</label>
                    <select class="form-control" v-model="pet.tags" id="tags" multiple required>
                        <option value="" selected="true" disabled="disabled">Seleccione una o mas tags</option>
                        <option v-for="tag in tags" :value="tag.id" :key="tag.id">{{ tag.name }}</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label for="status">Estado</label>
                    <select class="form-control" v-model="pet.status" id="status" required>
                        <option value="" selected="true" disabled="disabled">Seleccione un estado</option>
                        <option v-for="status in statuses" :value="status.id" :key="status.id">{{ status.name }}</option>
                    </select>     
                </div>              
                <button class="btn btn-primary my-3">Agregar</button>
            </form>
        </div>

    </div>
</template>
<script>
import petService from "../services/PetService";

export default {
    name: "add",
    data() {
        return {
            categories: [],
            tags: [],
            pet: {
                name: "",
                category: "",
                tags: [],
                status: "",
            },
            statuses: [
                {
                    id: "available",
                    name: "Disponible"
                },
                {
                    id: "pending",
                    name: "Pendiente"
                },
                {
                    id: "sold",
                    name: "Vendido"
                }
            ],
        }

    },

    created() {
        this.getCategories();  
        this.getTags();     
    },

    methods: {
        addPet() {
            petService.addPet(this.pet)
                .then( () => {
                    this.$router.push("/");
                })               
        },

        getCategories() {
            petService.getCategories()
                .then( response => {
                    this.categories = response.data;
                })              
        },

        getTags() {
            petService.getTags()
                .then( response => {
                    this.tags = response.data;
                })
        }
    }
}
</script>