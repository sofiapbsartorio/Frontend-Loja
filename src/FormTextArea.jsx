
const FormTextArea = ({field, onChange, label, value, error, autofocus}) => {
    return (
      <>
      <div className="form-floating">
      <textarea class={form-control ${error ? 'is-invalid' : 'is-valid'}} placeholder=" "  id="{field}" name="{field}" onChange={onChange} autoFocus={autofocus} style="height:84px">value={value || ""} 
          </textarea>
          <label htmlfor={field}>{label}</label>
      </div>
      {error && <div className="invalid-feedback">{error}</div>}
      </>
    )
  }