import "./Modal.css"

type ModalProps =  {
  title: string
}
export function Modal({ title }: ModalProps) {
    return (
      <div className="modal">
        <h4>{title}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }