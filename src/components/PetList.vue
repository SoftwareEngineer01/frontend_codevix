<template>
    <div>

        <h2 class="text-center my-5">Listado de Mascotas</h2>

        <div>
            <button @click="addPet" class="btn btn-primary mb-5">Agregar Mascota</button>
        </div>
 
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Tags</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="pet in pets" :key="pet.id">
                <td>{{ pet.id }}</td>
                <td><img :src="pet.photoUrls" alt=""></td>
                <td>{{ pet.name }}</td>
                <td>{{ pet.category.name }}</td>
                <td>
                    <ul v-for="tag in pet.tags" :key="tag.id">
                        <li>{{ tag.name }}</li>
                    </ul>
                </td>
                <td>{{ pet.status }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: pet.id }}" class="btn btn-warning ml-2">Edit</router-link>
                        <button class="btn btn-danger" @click="deletepet(pet.id)">Eliminar</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>

import petService from "../services/PetService";

export default {
    data() {
        return {
            pets: []
        }
    },
    created() {         
        this.petList();
    },
    methods: {

        petList() {
            petService.getPets().then(response => {
                this.pets = response.data;
            });
        },

        addPet() {
            this.$router.push({ name: 'add' });
        },

        deletepet(id) {               
            if (confirm("¿Está seguro de eliminar la mascota?")) {
                    petService.delete(id).then( () => {                    
                    this.petList();
                });                   
            }
        }           
    }
}
</script>