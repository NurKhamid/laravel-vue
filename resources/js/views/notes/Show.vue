<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{note.title}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{note.published}} - {{note.subject}} </h6>
                        <p class="card-text">{{note.description}}</p>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    data (){
        return {
            note : [],
        }
    }, 

    mounted(){
        this.getNote();
    }, 

    methods: {
        async getNote() {
            let response = await axios.get('/api/notes/' + this.$route.params.noteSlug)
            this.note = response.data.data
        }
    }

}
</script>
