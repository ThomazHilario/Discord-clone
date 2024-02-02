// RoutePage
import RoutePage from "./Routes"

// Context Provider
import ContextChannel from "./Context"

export default function App() {
  
  return <ContextChannel><RoutePage/></ContextChannel>
}

