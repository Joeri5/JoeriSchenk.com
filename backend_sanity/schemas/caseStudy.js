export default {
    name:'caseStudy',
    title:'Case Study',
    type:'document',
    fields:[
        {
            name:'project',
            title:'Project',
            type:'reference',
            to: [{ type: 'works' }]
        },
    ]
}