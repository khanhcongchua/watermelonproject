import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 4,
  tables: [
    // We'll add tableSchemas here later
    tableSchema({
        name: 'accounts',
        columns: [
          { name: 'name', type: 'string' },
          { name: 'cap', type: 'number' },
          { name: 'tap', type: 'number' },
          { name: 'user_id', type: 'string' },
          
        ],
      }),


      tableSchema({
        name:'allocations',
        columns:[
          {name: 'create_at', type:'number'},
          {name: 'income', type:'number'},
          { name: 'user_id', type: 'string' },
        ],
      }),

      tableSchema({
        name:'account_allocations',
        columns:[
          {name: 'create_at', type:'number'},
          {name: 'account_id', type:'string'},
          {name: 'allocation_id', type:'string'},
          {name: 'amount', type:'number'},
          {name: 'cap', type:'number'},
          { name: 'user_id', type: 'string' },
        ],
      }),
  ]
})