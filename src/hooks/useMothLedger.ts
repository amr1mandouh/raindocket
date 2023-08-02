import{useCallback,useEffect,useMemo,useState}from'react'
import{filterItems}from'../lib/filters';import{loadContainers,saveContainers}from'../lib/storage';import type{Container,Filters,Item,Category}from'../types'
const initial:Filters={query:'',category:'all',status:'all',priorityOnly:false}
export function useMothLedger(){const[containers,setContainers]=useState<Container[]>(loadContainers);const[activeId,setActiveId]=useState('catchment-night');const[filters,setFilters]=useState(initial);const[selected,setSelected]=useState<Set<string>>(new Set);const[message,setMessage]=useState('')
const active=useMemo(()=>containers.find(c=>c.id===activeId)||containers[0],[containers,activeId]);const visible=useMemo(()=>filterItems(active?.items||[],filters),[active,filters]);useEffect(()=>saveContainers(containers),[containers])
const switcher=useCallback((id:string)=>{setActiveId(id);setFilters(initial);setSelected(new Set);setMessage('C changed and filters reset.')},[])
const update=useCallback((x:Partial<Filters>)=>setFilters(f=>({...f,...x})),[])
const toggle=useCallback((id:string)=>setSelected(s=>{const n=new Set(s);if(n.has(id))n.delete(id);else n.add(id);return n}),[])
const toggleAll=useCallback(()=>setSelected(s=>{const n=new Set(s);const all=visible.length>0&&visible.every(i=>n.has(i.id));visible.forEach(i=>all?n.delete(i.id):n.add(i.id));return n}),[visible])
const mark=useCallback((done:boolean)=>{setContainers(cs=>cs.map(c=>c.id!==active?.id?c:{...c,items:c.items.map(i=>selected.has(i.id)?{...i,done}:i)}));setMessage(selected.size+' selected records marked '+(done?'logged.':'pending.'));setSelected(new Set)},[active?.id,selected])
const add=useCallback((item:Omit<Item,'id'|'number'>)=>{setContainers(cs=>cs.map(c=>c.id!==active?.id?c:{...c,items:[...c.items,{...item,id:'item-'+Date.now(),number:c.items.length+1}]}));setMessage(item.name+' added to the catchment.')},[active?.id])
const counts=useMemo(()=>active?.items.reduce<Record<string,number>>((a,i)=>({...a,[i.category]:(a[i.category]||0)+1}),{})||{},[active])
return{containers,active,filters,visible,selected,message,counts,switcher,update,toggle,toggleAll,mark,add}}
export type AddInput=Omit<Item,'id'|'number'>;export type {Category}

