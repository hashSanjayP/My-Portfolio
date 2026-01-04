import './Header.css'

function SectionHead({name}){
    return <>
    <div className='text-center mb-12'>
        <h3 className='section-head'>{name}</h3>
        <div className='w-16 bg-green-600 h-1 rounded-full mx-auto'></div>
    </div>
    
    </>
}

export {SectionHead}