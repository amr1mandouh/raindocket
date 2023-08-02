import type {Filters,Item} from '../types'
export function filterItems(items:Item[],f:Filters){const q=f.query.trim().toLowerCase();return items.filter(i=>(!q||[i.name,i.category,i.notes,String(i.number)].some(v=>v.toLowerCase().includes(q)))&&(f.category==='all'||i.category===f.category)&&(f.status==='all'||(f.status==='done'?i.done:!i.done))&&(!f.priorityOnly||i.priority))}
export function progress(items:Item[]){const done=items.filter(i=>i.done).length;return {done,total:items.length,percent:items.length?Math.round(done/items.length*100):0}}

