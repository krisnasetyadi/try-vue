export default {
    template: `
    <div class="flex gap-2">
    <button
        @click="$emit('update:currentTag',tag)"
        v-for="tag in tags" 
        class="border rounded px-1 py-1 text-xs"
        :class="{
            'border-blue-500 text-blue-500': tag === currentTag 
        }"
    >{{ tag }}</button>
    </div>
    
    `,
    props: {
        initialTags: Array,
        // currentTag: String,
        currentTag: String
        // modelValue
        // default prop name when using v model on a custom component
    },
    // data(){
    //     return {
    //         currentTag: 'all'
    //     }
    // },
    computed: {
        tags(){
            // set each item must be unique
            return ['all', ...new Set(this.initialTags  )]
        }
    }
}