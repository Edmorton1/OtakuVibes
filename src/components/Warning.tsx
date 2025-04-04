import Modal from "@/components/Modal"
import * as style from "@/css/warning.module.scss"
import store from "@/store/store"
import { useRef } from "react"

interface propsInterface {
  playlist_arr: number[],
  uslovie: any;
  setModalWarning: React.Dispatch<React.SetStateAction<boolean>>
}

function Warning({playlist_arr, uslovie, setModalWarning}: propsInterface) {
  const nodeRef = useRef(null)
  console.log(playlist_arr)

  return (
    <Modal setModal={setModalWarning} nodeRef={nodeRef} uslovie={uslovie}>
      <div className={style.wrapper} ref={nodeRef} onClick={(e) => e.stopPropagation()}>
        <div>Внимание!</div>
        <span>У вас есть не одобренные треки</span>
        <div>
          <button onClick={() => {store.createPlaylist(playlist_arr, true); setModalWarning(false)}}>Добавить только одобренные треки</button>
          <button onClick={() => {store.createPlaylist(playlist_arr, false); setModalWarning(false)}}>Добавить всё</button>
        </div>
      </div>
  </Modal>
  )
}

export default Warning