import CleaveInput from "./CleaveInput"
import FormTextArea from "./FormTextArea"

const ProductForm = ({handleChange, inputs, errors, isNew }) => {
  return (
    <>
        <div className="row">
            <div className="col-12 mb-3">
                <FormInput type="text" field="nome" label="Nome" value={inputs?.nome} onChange={handleChange} error={errors?.nome} autofocus={true}></FormInput>
            </div>
            <div className="col-12 mb-3">    
                <CleaveInput type="text" field="preco" label="Preco" value={inputs?.preco} onChange={handleChange} error={errors?.preco} options={{prefix: 'R$', numeral: true, numeralThousandsGroupStyle:'thousand', rawValueTrimPrefix: true}}></CleaveInput>
            </div>
            <div className="col-12 mb-3">
                <FormTextArea field="descricao" label="Descricao" value={inputs?.descricao} onChange={handleChange} error={errors?.descricao} autofocus={true}></FormTextArea>
            </div>
            <div className="col-12 mb-3">
                <CleaveInput type="text" field="estoque" label="Estoque" value={inputs?.estoque} onChange={handleChange} error={errors?.estoque} options={{numeral:true, numeralPositiveOnly: true, numeralDecimalScale: 0}} />
            </div>
        </div>
    </>
  )
}

export default ProductForm