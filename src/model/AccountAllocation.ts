// model/Post.js
import { Model } from '@nozbe/watermelondb';
import { 
    field, 
    text, 
    readonly, 
    date, 
    relation, 
    immutableRelation
} from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';



export default class AccountAllocation extends Model {
  static table = 'account_allocations';
  static associations = {
    allocations: {type: 'belong_to', key: 'allocation_id'},
    accounts: {type: 'belong_to', key: 'account_id'},
  }




  @readonly @date('create_at') createdAt: Date;
  @field('cap') cap: number;
  @field('amount') amount: number;

  @immutableRelation('accounts', 'account_id') account;
  @immutableRelation('allocations', 'allocation_id') allocation;
}  

// @text('account_id') name: string;
