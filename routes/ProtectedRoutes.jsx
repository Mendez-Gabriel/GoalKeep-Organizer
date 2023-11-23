import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({ children, user }) => {
  if (!user) {
    return <Navigate to={'/'} />
  } else return children;
}

export default ProtectedRoutes