import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'
// props approac
{/* <assignment-create :assignments="assignments"></assignment-create> */}
export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
    <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
    </section>
    <assignment-create v-on:Add="add" ></assignment-create>
    `,
    data() {
        return {
            assignments: []
        }
    },
    computed: {

        filters(){
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete ),
                completed: this.assignments.filter(assignment => assignment.complete ),
            }
        }
    },
    created(){
        fetch('http://localhost:3000/assignments')
            .then(response => response.json())
            .then(data=> {
               this.assignments = data
            })
    },
    methods: {
        add(name){
         
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            })
        }
    }
}

 // <section v-show="completed.length" class="mt-8">
//     <h2 class="font-bold mb-2">Completed </h2>

//     <ul>
//         <li 
//             v-for="assignment in completed" 
//             :key="assignment.id"
//         >
//             <label>
//                 {{assignment.name}}

//                 <input type="checkbox" v-model="assignment.complete" />
//             </label>
//         </li>
//     </ul>
// </section>