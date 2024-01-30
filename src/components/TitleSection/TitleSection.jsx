

export const TitleSection = ({ id, title}) => {
  return (
    <div className="p-3 pb-md-4 mx-auto text-center" id={ id }>
        <h2 className="display-4 fw-normal text-body-emphasis">{ title }</h2>
    </div>
  )
}
