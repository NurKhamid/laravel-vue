<template>
    <div class="container">
        <h3>Table of Notes</h3>
        <form class="mb-3" action="" method="get" @submit.prevent="print">
            <button type="submit" class="btn btn-info">print</button>
        </form>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Subject</th>
                    <th>Published</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="note in notes" :key="note.slug">
                    <td>
                        <router-link :to="{name : 'notes.show', params : {noteSlug : note.slug}}">{{note.title}}</router-link>
                    </td>
                    <td>{{ note.subject }}</td>
                    <td>{{ note.published }}</td>
                    <td>
                        <button class="btn btn-info"><router-link style="text-decoration: none; color: inherit;" :to="{name : 'notes.edit', params : {noteSlug : note.slug}}">Edit</router-link></button>
                        <delete-note :endpoint="note.slug" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import DeleteNote from './Delete';
export default {
    components : {
        DeleteNote
    },

    data (){
        return {
            notes : [],
        }
    },

    mounted() {
        this.getNotes();
    },

    methods: {
        async getNotes(){
            axios.get('/api/notes').then((response) => {
                this.notes = response.data.data;
            }).catch((err) => {
                throw err;
            });
        },

        print(){
            window.print();
        }
    }
}
</script>