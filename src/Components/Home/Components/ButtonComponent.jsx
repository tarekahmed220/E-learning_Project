export default function buttonComponent(props) {
  return (
    <button
      className={`bg-[${props.bg}] px-4 py-1 text-[${props.colorText}]
      rounded border-2 border-[var(--colorOrange)] font-${props.fontText}`}
    >
      {props.nameBtn}
    </button>
  );
}
