import{progress}from'../lib/filters';import type{Container}from'../types'
export function ProgressCard({container}:{container:Container}){const p=progress(container.items);return <section className="progress"><div><span className="eyebrow">C progress</span><h2>{p.done} of {p.total} records logged</h2><p>{p.percent}% of the night is written down.</p></div><strong>{p.percent}%</strong><div className="bar" role="progressbar" aria-label="C progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={p.percent}><i style={{width:p.percent+'%'}}/></div></section>}

