import "./Button.css";

function NavButton({ type, hyper }) {
  return (
    <>
      <a className="nav-btn" href={`#${hyper}`}>
        {type}
      </a>
    </>
  );
}

function ContactButton({ via,hyper, children }) {
  return (
    <>
      <a className="border-transparent rounded-3xl w-40 p-3 flex items-center gap-4 underline mb-2 cursor-pointer "
      href={hyper} target="blank">
        {children}
        {via}
      </a>
    </>
  );
}

function PrimaryButton({ type, hyper, isOn }) {
  return (
    <>
      <a
        className="primary-btn"
        href={hyper}
        onClick={(e) => {
          if (!isOn) {
            e.preventDefault();
            alert("Currently in Progress!");
          }
        }}
        target="blank"
      >
        {type}
      </a>
    </>
  );
}

function SecondaryButton({ hyper }) {
  return (
    <>
      <a className="secondary-btn" href={hyper} target="blank">
        Github
      </a>
    </>
  );
}

export { NavButton, ContactButton, PrimaryButton, SecondaryButton };
