import { useDispatch, useSelector } from "react-redux"
import { fetchNotes } from "../../slices/notesSlice"
import { useEffect } from "react"

export default function NotesGrid() {
  const notes = useSelector((state) => state.notes)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])

  return (
    <div>
      <h1>Список нотаток</h1>
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id} style={{ backgroundColor: note.color }}>
              <span>
                {note.name} | {note.text}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
