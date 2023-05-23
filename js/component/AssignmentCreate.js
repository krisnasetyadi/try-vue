export default {
    template: `
    <form @submit.prevent="add">
    <div class="border border-gray-600 text-black">
      <input 
          v-model="newAssignment"
          placeholder="New assignment.." 
          class="p-2 mt-4" 
      />
      <button type="submit" class="bg-white p-2 border-l">Add</button>
    </div>
  </form>
    `,
    // props: {
    //     assignments: Array
    // },
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add(){
            // e.preventDefault()
            this.$emit('Add', this.newAssignment)
            // this.assignments.push({
            //     name: this.newAssignment,
            //     completed: false,
            //     id: this.assignments.length + 1
            // })
            this.newAssignment = ''
        }
    }
}