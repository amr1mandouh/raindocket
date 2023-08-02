export function BulkActions({n,onMark}:{n:number;onMark:(done:boolean)=>void}){return <div className="bulk"><span>{n} selected</span><button disabled={!n} onClick={()=>onMark(true)}>Mark logged</button><button disabled={!n} className="quiet" onClick={()=>onMark(false)}>Move pending</button></div>}

