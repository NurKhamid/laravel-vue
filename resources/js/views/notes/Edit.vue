<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <!-- Alert -->
                <!-- <div v-if="successMessage" class="alert alert-success">
                    {{ successMessage }}
                </div> -->
                <div class="card">
                    <div class="card-header">New Note</div>
                    <div class="card-body">
                        <form action="#" method="post" @submit.prevent="update">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" v-model="form.title" id="title" class="form-control">
                                <div v-if="TheError.title" class="mt2 text-danger">{{ TheError.title[0] }}</div>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <select @change="selectedSubject" id="subject" class="form-control">
                                    <option :value="form.subject_id" v-text="form.subject"></option>
                                    <template v-for="subject in subjects">
                                        <option v-if="form.subject_id !== subject.id" :key="subject.id" :value="subject.id">
                                            {{ subject.title }}
                                        </option>
                                    </template>
                                </select>
                                <div v-if="TheError.subject" class="mt2 text-danger">{{ TheError.subject[0] }}</div>
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea v-model="form.description" id="description" rows="5" class="form-control"></textarea>
                                <div v-if="TheError.description" class="mt2 text-danger">{{ TheError.description[0] }}</div>
                            </div>
                            <button type="submit" class="btn btn-primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form : [],
            subjects : [],
            TheError : [],
            selected : '',
        };
    },

    mounted() {
        this.getSubjects();
        this.getNotes();
    },

    methods : {
        async getSubjects() {
            let response = await axios.get('/api/subjects')
            if (response.status === 200) {
                this.subjects = response.data;
            }
        },

        async getNotes() {
            let response = await axios.get(`/api/notes/${this.$route.params.noteSlug}`);
            this.form = response.data.data;
        },

        selectedSubject (e){
            this.selected = e.target.value;
        },

        async update(){
            this.form['subject'] = this.selected || this.form.subject_id
            let response = await axios.patch(`/api/notes/${this.$route.params.noteSlug}/edit`, this.form);

            this.$toasted.show(response.data.message, {
                type : 'success',
                duration : 3000,
            })
            
            this.$router.push('/notes/table')
        }
    }
};
</script>