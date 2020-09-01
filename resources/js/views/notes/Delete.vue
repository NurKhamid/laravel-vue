<template>
    <button ref="DeleteNote" @click="destroyNote" class="btn btn-danger">Delete</button>
</template>

<script>
export default {
    props : ['endpoint'],
    methods: {
        async destroyNote() {
            let q = window.confirm("Are you sure?");
            if (q == true) {
                let response = await axios.delete(`/api/notes/${this.endpoint}/delete`);
                if (response.status === 200){
                    this.$toasted.show(response.data.message, {
                        type : 'success',
                        duration : 3000,
                    })

                    this.$refs.DeleteNote.parentNode.parentNode.remove();
                }
            } else {
                console.log('Not Deleted');
            }
        }
    }

}
</script>