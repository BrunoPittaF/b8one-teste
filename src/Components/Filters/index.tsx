
type FiltersProps = {
  category: string;
  setCategory: (c: string) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
  categories: string[];
  bounds: { min: number; max: number };
  clearFilters: () => void;
  disabled?: boolean;
};

export default function Filters({
  category,
  setCategory,
  priceRange,
  setPriceRange,
  categories,
  bounds,
  clearFilters,
  disabled = false,
}: FiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Categoria</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-sm"
            disabled={disabled}
          >
            <option value="all">Todas</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">Faixa de preço (R$)</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={bounds.min}
              max={bounds.max}
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value || bounds.min), priceRange[1]])}
              className="w-1/2 rounded-md border px-2 py-2 text-sm"
              disabled={disabled}
            />
            <span className="text-sm text-gray-500">—</span>
            <input
              type="number"
              min={bounds.min}
              max={bounds.max}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value || bounds.max)])}
              className="w-1/2 rounded-md border px-2 py-2 text-sm"
              disabled={disabled}
            />
          </div>
          <div className="mt-2 text-xs text-gray-500">Min: {bounds.min} — Max: {bounds.max}</div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={clearFilters}
          className="bg-gray-100 px-3 py-2 rounded-md text-sm shadow-sm"
          disabled={disabled}
        >
          Limpar filtros
        </button>
        <div className="text-xs text-gray-500">Os filtros são aplicados automaticamente.</div>
      </div>
    </div>
  );
}