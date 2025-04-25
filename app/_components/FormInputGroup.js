export default function FormInputGroup({ label, children }) {
  return (
    <div className="grid grid-cols-[24rem_1fr_1.2fr] gap-4 items-center">
      {label && (
        <label htmlFor={children.props.id} className="text-sm font-medium">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}
