import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    // We'll add tableSchemas here later
    tableSchema({
        name: 'accounts',
        columns: [
          { name: 'name', type: 'string' },
          { name: 'cap', type: 'number' },
          { name: 'tap', type: 'number' },
        ]
      }),
  ]
})