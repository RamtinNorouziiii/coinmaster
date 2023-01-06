import { ReactNode } from "react"
import NavBar from "../components/navbar"

interface Props {
    children: ReactNode
  }
export const MainLayout = (props:Props)=>{
    const {children}=props
    return<>
    <NavBar />
    <>
    {children}
    </>
    </>
}