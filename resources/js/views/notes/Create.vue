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
                        <form action="#" method="post" @submit.prevent="store">
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" v-model="form.title" id="title" class="form-control">
                                <div v-if="TheError.title" class="mt2 text-danger">{{ TheError.title[0] }}</div>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <select v-model="form.subject" id="subject" class="form-control">
                                    <option v-for="subject in subjects" :key="subject.id" :value="subject.id">
                                        {{ subject.title }}
                                    </option>
                                </select>
                                <div v-if="TheError.subject" class="mt2 text-danger">{{ TheError.subject[0] }}</div>
                            </div>
                            <div class="form-group">
                                <label for="description">Description</label>
                                <textarea v-model="form.description" id="description" rows="5" class="form-control"></textarea>
                                <div v-if="TheError.description" class="mt2 text-danger">{{ TheError.description[0] }}</div>
                            </div>
                            <button type="submit" class="btn btn-primary">Save</button>
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
            form : {
                title : '',
                description : '',
                subject : '',
            },
            // successMessage : '',
            subjects : [],
            TheError : []
        };
    },

    mounted() {
        this.getSubjects();
    },

    methods : {
        async getSubjects() {
            let response = await axios.get('/api/subjects')
            if (response.status === 200) {
                this.subjects = response.data;
            }
        },

        async store(){
            try {
                let response = await axios.post('/api/notes/create-new-note', this.form)
                if (response.status === 200){
                    this.form.title = ''
                    this.form.description = ''
                    this.form.subject = ''
                    this.TheError = []
                    // this.successMessage = response.data.message
                    this.$toasted.show(response.data.message, {
                        type : 'success',
                        duration : 3000,
                    })
                }
            }catch(e){
                this.TheError = e.response.data.errors;
            }
            
        },
    }
};
</script>