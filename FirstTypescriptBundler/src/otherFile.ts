import {me , User } from './DeclarationFiles';
// import type { User } from './DeclarationFiles';
import {addDays} from "date-fns"


function printUser(user: User){
    console.log(user.name);

}

printUser(me); // John
addDays(new Date(), 3)