import http from "./httpCommon"

const getAllNotes = async () => {
  const response = await http.get("/notes")
  return response.data
}

export { getAllNotes }
