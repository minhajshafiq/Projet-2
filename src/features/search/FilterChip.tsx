type FilterChipProps = {
  icon: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export function FilterChip({ icon, label, selected = false, onClick }: FilterChipProps) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        aria-pressed={selected}
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold border transition-colors ${
          selected
            ? 'border-primary bg-primary/10 text-primary'
            : 'border-gray-200 text-black hover:bg-gray-100'
        }`}
      >
        <i className={`fas ${icon} ${selected ? 'text-primary' : 'text-primary'}`}></i>
        {label}
      </button>
    </li>
  );
}

