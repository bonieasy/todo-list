import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksInfo } from "./components/TasksInfo/Tasks";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
    <Header />
    <NewTask />
    <TasksInfo />
    <Tasks />
    <GlobalStyle />
    </>

  )
}
 