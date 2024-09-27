import { synchronize } from '@nozbe/watermelondb/sync';
import database from '.';
import { supabase } from '../lib/supabase';

export async function mySync() {
    await synchronize({
        database,
        pullChanges: async ({lastPulledAt, schemaVersion, migration}) => {
            //sunc with supabase
            return{
                changes: {},
                timestamp: +(new Date()),

            }
        },
        pushChanges: async ({changes, lastPulledAt}) => {
            console.log('pushing data');

            const {error} = await supabase.rpc('push', {changes});

            console.log("Error: ", error);

            console.log(changes);

            //push changes to supabase

        },


    })
}