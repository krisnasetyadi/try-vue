import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"

export default {
    components: {Assignment, AssignmentTags},
    template: `
    <section v-show="assignments.length">
    <h2 class="font-bold mb-2">
      {{ title }}
      <span>({{assignments.length}})</span>
    </h2>
    <assignment-tags 
      :initial-tags="assignments.map(a=>a.tag)"
      @change="currentTag = $event"
      v-model:current-tag="currentTag"></assignment-tags>

    <ul class="border border-gray-600 divide-y mt-6">
        <assignment 
        v-for="assignment in filteredAssignment"
        :key="assignment.id"
        :assignment="assignment">
          
        </assignment>
    </ul>

    </section>
    `,
    props: {
        assignments: Array,
        title: String,
    },
    data(){
      return {
        currentTag: 'all'
      }  
    },
    computed: {
        filteredAssignment(){
            if(this.currentTag === 'all') {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },
  
    } 
}