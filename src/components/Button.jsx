import './Button.css' 

function NavButton({type,hyper}){
    return <>
        <a className='nav-btn' href={`#${hyper}`}>{type}</a>
    </>
}

function ContactButton({via,children}){
    return <>
          <button className="border-transparent rounded-3xl w-40 p-3 flex items-center gap-4 r">
            {children}
            {via}</button>
    </>
}

function PrimaryButton({type}){
    return <>
          <button className="primary-btn">{type}</button>
    </>
}

function SecondaryButton(){
    return <>
          <button className="secondary-btn">Github</button>
    </>
}

export {NavButton, ContactButton, PrimaryButton, SecondaryButton};