// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { date, field, readonly, text, writer } from '@nozbe/watermelondb/decorators'
import { allocationsCollection } from '../db';

export default class Allocation extends Model {
  static table = 'allocations';



  
  @field('income') income: number;
  @readonly @date('create_at') createdAt: Date;
  @writer static async create(income: number){
    return await allocationsCollection.create((newAllocation) =>{
      newAllocation.income = income;
    });
  }
}