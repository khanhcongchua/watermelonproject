// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { date, field, readonly, text } from '@nozbe/watermelondb/decorators'


export default class Allocation extends Model {
  static table = 'allocations';



  
  @field('income') income: number;
  @readonly @date('create_at') createdAt: Date;
  
}