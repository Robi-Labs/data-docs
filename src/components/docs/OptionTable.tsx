interface Option {
  flag: string;
  type?: string;
  description: string;
}

export const OptionTable = ({ options }: { options: Option[] }) => (
  <div className="my-6 overflow-hidden rounded-lg border border-white/[0.08]">
    <table className="w-full text-left text-sm">
      <thead className="bg-surface-2">
        <tr className="border-b border-white/[0.06]">
          <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Flag
          </th>
          <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Type
          </th>
          <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {options.map((opt, i) => (
          <tr
            key={opt.flag}
            className={i % 2 === 0 ? "bg-surface-1/40" : "bg-transparent"}
          >
            <td className="px-4 py-3 align-top font-mono text-[13px] text-foreground whitespace-nowrap">
              {opt.flag}
            </td>
            <td className="px-4 py-3 align-top font-mono text-[12px] text-muted-foreground whitespace-nowrap">
              {opt.type ?? "—"}
            </td>
            <td className="px-4 py-3 align-top text-[hsl(var(--text-soft))]">
              {opt.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
