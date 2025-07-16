"use client" // Quan trọng: Đánh dấu đây là Client Component

import { createContext, useContext, useState, type ReactNode } from "react"

interface AuthContextType {
  user: { username: string } | null
  login: (username: string) => void
  logout: () => void
}

// Khởi tạo Context với giá trị mặc định là undefined
// useAuth sẽ kiểm tra để đảm bảo nó được sử dụng trong AuthProvider
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ username: string } | null>(null)

  const login = (username: string) => {
    // Trong ứng dụng thực tế, bước này sẽ liên quan đến việc thiết lập session/token
    setUser({ username })
  }

  const logout = () => {
    // Trong ứng dụng thực tế, bước này sẽ liên quan đến việc xóa session/token
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
