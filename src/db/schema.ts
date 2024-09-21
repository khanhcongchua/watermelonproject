import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 2,
  tables: [
    // We'll add tableSchemas here later
    tableSchema({
        name: 'accounts',
        columns: [
          { name: 'name', type: 'string' },
          { name: 'cap', type: 'number' },
          { name: 'tap', type: 'number' },
        ],
      }),


      tableSchema({
        name:'allocations',
        columns:[
          {name: 'create_at', type:'number'},
          {name: 'income', type:'number'},
        ],
      }),
  ]
})