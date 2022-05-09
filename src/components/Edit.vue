<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Editar Mascota</h1>
                    <form @submit.prevent="updatePet">
                        <div class="form-group">
                            <label for="name">Nombre</label>
                            <input type="text" class="form-control" v-model="pet.name" id="name" placeholder="Nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="category">Categoría</label>                            
                            <select class="form-control" v-model="pet.category" id="category" required>
                                <option value="" selected="true" disabled="disabled">Seleccione una categoría</option>
                                <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
                            </select>
                        </div>                       
                        <div class="form-group">
                            <label for="status">Estado</label>
                            <select class="form-control" v-model="pet.status" id="status">
                                <option value="" selected="true" disabled="disabled">Seleccione un estado</option>
                                <option v-for="status in statuses" :value="status.id" :key="status.id">{{ status.name }}</option>
                            </select>
                        </div>
                        <button class="btn btn-primary my-3">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import petService from "../services/PetService";

export default {
    name: "edit",
    data() {
        return {
            categories: [],
            tags: [],
            pet: {},
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
        };
    },

    created() {
        this.getPet();
        this.getCategories();
    },
    
    methods: {

        getPet() {
            petService.getPet(this.$route.params.id)
            .then(response => {
                this.pet = response.data;
            });
        },
        
        updatePet() {
            petService.updatePet(this.pet)
            .then( () => {
                this.$router.push("/");
            });
        },

        getCategories() {
            petService.getCategories()
                .then( response => {
                    this.categories = response.data;
                })              
        },      

    }
}
</script>