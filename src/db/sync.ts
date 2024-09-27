import { synchronize } from '@nozbe/watermelondb/sync';
import database from './index';
import { supabase } from '../lib/supabase';

export async function mySync() {
    await synchronize({
        database,
        sendCreatedAsUpdated: true,
        pullChanges: async ({lastPulledAt, schemaVersion, migration}) => {
            console.log('pulling data');
            //sync with supabase
            const {data, error} = await supabase.rpc('pull', {
                last_pulled_at: lastPulledAt,
                schemaversion: schemaVersion,
                migration: migration,
                
            });

            console.log(error);


            console.log(JSON.stringify(data));
            return{
                changes: data.changes,
                timestamp: data.timestamp,

            }
        },
        pushChanges: async ({changes, lastPulledAt}) => {
            

            const {error} = await supabase.rpc('push', {changes});

            console.log("Error: ", error);

            console.log(changes);

            //push changes to supabase

        },


    })
}