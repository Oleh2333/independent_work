import http from "./httpCommon"

const getAllTodo = async () => {
  const response = await http.get("/todo")
  return response.data
}

export { getAllTodo }
