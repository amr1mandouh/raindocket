import type{Container}from'../types'
export function LoadPicker({containers,active,onChange}:{containers:Container[];active:string;onChange:(x:string)=>void}){return <label className="picker">C<select aria-label="C" value={active} onChange={e=>onChange(e.target.value)}>{containers.map(c=><option key={c.id} value={c.id}>{c.name} · {c.city}</option>)}</select></label>}

