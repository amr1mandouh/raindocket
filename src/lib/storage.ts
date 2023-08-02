import type {Container} from '../types'
const KEY='raindocket.containers'
export function sampleContainers():Container[]{return[{id:'catchment-night',name:'First Storm',place:'Rooftop Catchment',city:'Cairo',startDate:'2026-11-06',endDate:'2026-11-07',items:[
{id:'m1',name:'Roof gauge check',category:'roof',number:1,done:true,priority:true,notes:'Warm wall near the lamp.'},
{id:'m2',name:'Cistern level note',category:'cistern',number:2,done:false,priority:false,notes:'Check the fig trees.'},
{id:'m3',name:'Garden barrel note',category:'garden',number:3,done:false,priority:true,notes:'Photograph the wing edge.'},
{id:'m4',name:'Runoff channel visit',category:'runoff',number:4,done:false,priority:false,notes:'Log temperature with sighting.'},
{id:'m5',name:'Street drain note',category:'street',number:5,done:true,priority:false,notes:'Use the macro lens.'}]},{id:'catchment-lantern',name:'Lantern Count',place:'Garden Edge',city:'Giza',startDate:'2026-11-13',endDate:'2026-11-14',items:[]}]}
export function loadContainers(){try{const raw=localStorage.getItem(KEY);if(!raw)return sampleContainers();const x:unknown=JSON.parse(raw);if(!Array.isArray(x))throw Error();return x as Container[]}catch{return sampleContainers()}}
export function saveContainers(x:Container[]){localStorage.setItem(KEY,JSON.stringify(x))}

