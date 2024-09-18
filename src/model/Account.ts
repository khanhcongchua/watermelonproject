// model/Post.js
import { Model } from '@nozbe/watermelondb'
import { field, text } from '@nozbe/watermelondb/decorators'


export default class Account extends Model {
  static table = 'accounts'



  @text('name') name: string;
  @field('tap') tap: number;
  @field('cap') cap: number;
}