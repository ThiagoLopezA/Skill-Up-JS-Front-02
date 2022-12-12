export const FieldSelect = ({ options, value }) => (
  <select
    value={value}
    class="form-select"
    style={{ width: 'fit-content' }}
    onChange={() => {}}
  >
    {options.map(op => (
      <option value={op} key={op}>
        {op}
      </option>
    ))}
  </select>
)

export const FieldInput = ({ value }) => (
  <input
    type="text"
    class="form-control"
    style={{ width: 'fit-content' }}
    value={value}
    placeholder="hola"
    onChange={() => {}}
  />
)

export const FieldItem = ({ value }) => <td>{value}</td>
