export type Category='roof'|'cistern'|'garden'|'runoff'|'street'
export type Item={id:string;name:string;category:Category;number:number;done:boolean;priority:boolean;notes:string}
export type Container={id:string;name:string;place:string;city:string;startDate:string;endDate:string;items:Item[]}
export type Filters={query:string;category:Category|'all';status:'all'|'done'|'pending';priorityOnly:boolean}

