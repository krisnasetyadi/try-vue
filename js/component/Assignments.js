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
            assignments: [
                {name: 'Finish project', complete: false, id:1, tag: 'math'},
                {name: 'Read Chapter', complete: false, id:2, tag: 'science'},
                {name: 'Turn in homework', complete: false, id:3, tag: 'math'},
            ],
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