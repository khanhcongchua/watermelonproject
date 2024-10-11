import { synchronize } from '@nozbe/watermelondb/sync';
import database from './index';
import { supabase } from '../lib/supabase';
import { getLoggedInUserId } from '../app/(auth)/getLoggedInUserId'

export async function mySync() {

    const loggedInUserId = await getLoggedInUserId();  // Lấy user_id người đăng nhập

    await synchronize({
        database,
        sendCreatedAsUpdated: true,
        pullChanges: async ({lastPulledAt, schemaVersion, migration}) => {
            console.log('pulling data');


////hàm pull
            //sync with supabase
            // const {data, error} = await supabase.rpc('pull', {
            //     last_pulled_at: lastPulledAt,
            //     schemaversion: schemaVersion,
            //     migration: migration,
                
            // });
////////hàm pull



//hàm pulltest
// Gọi hàm pull với user_id của người đăng nhập
const { data, error } = await supabase.rpc('pulltest', {
    last_pulled_at: lastPulledAt,
    schemaversion: schemaVersion,
    migration: migration,
    _user_id: loggedInUserId  // Truyền user_id của người đăng nhập
});

/////hàm pulltest

            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
            console.log(error);
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");



            console.log(JSON.stringify(data));
            return{
                changes: data.changes,
                timestamp: data.timestamp,

            }
        },
        pushChanges: async ({changes, lastPulledAt}) => {
            console.log('========push=========push=======push======push==========push=============push============push============');

            // Kiểm tra xem changes có bao gồm bảng allocations hay không
            if (changes.allocations) {
                console.log('Allocations data being pushed:');
            } else {
                console.log('No allocations changes detected');
            }
            //
            const rs = await supabase.rpc('push', {changes});
            // const rs = await supabase.rpc('pushtest', {changes});

            console.log("Error: ", rs);

            console.log(changes);
            console.log("Changes data: ", JSON.stringify(changes, null, 2));


            //push changes to supabase

        },


    })
}