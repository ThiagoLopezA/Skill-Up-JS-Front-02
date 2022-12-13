export const FieldSelect = ({ options, value, handleChange }) => (
  <select
    value={value}
    class="form-select"
    style={{ width: 'fit-content' }}
    onChange={e => handleChange(e.target.value)}
  >
    {options.map(op => (
      <option value={op} key={op}>
        {op}
      </option>
    ))}
  </select>
)

export const FieldInput = ({ value, handleChange }) => (
  <input
    type="text"
    class="form-control"
    style={{ width: 'fit-content' }}
    value={value}
    placeholder="Edit..."
    onChange={e => handleChange(e.target.value)}
  />
)

export const FieldItem = ({ value }) => <td>{value}</td>
