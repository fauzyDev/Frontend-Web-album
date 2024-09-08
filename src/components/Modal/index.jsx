const Modal = () => {
  return (
      <>
      <button className="btn bg-purple-600 hover:bg-white text-black" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    </>
  )
}

export default Modal