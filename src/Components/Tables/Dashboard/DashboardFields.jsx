export const FieldSelect = ({ options, value, onChange }) => (
  <select
    value={value}
    className="form-select"
    style={{ width: 'fit-content' }}
    onChange={e => onChange(e.target.value)}
  >
    {options.map(op => (
      <option value={op} key={op}>
        {op}
      </option>
    ))}
  </select>
)

export const FieldInput = ({ value, onChange }) => (
  <input
    type="text"
    className="form-control"
    style={{ width: 'fit-content' }}
    value={value}
    placeholder="Edit..."
    onChange={e => onChange(e.target.value)}
  />
)

export const FieldItem = ({ value }) => <td>{value}</td>
